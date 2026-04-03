const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { setupWebSocket } = require('./proxy.js')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBkYTViZTg1N2MwZGEyZmE2ZjczMTFkZTAxN2E1NCIsIm5iZiI6MTc3Mjk0MTU4MC4wOTYsInN1YiI6IjY5YWNmMTBjMTUyMDZkNWFjOTRlYWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Unyx_r0z_e7lzXYTgOGp_iPAK6Dt7SSlSmD5RlKiJY'
  }
};


const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;


app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get("/actor", async (req, res) => {
    try {
    const today = new Date();
    const start = new Date(2026, 0, 1);
    const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));

    // Page updates every 20 days to keep the actor pool fresh
    const page = Math.floor(diffDays / 20) + 1;
    
    // 1. Fetch Popular People
    const popularRes = await fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`, 
      options
    );
    const popularData = await popularRes.json();

    if (!popularData?.results?.length) {
      return res.status(502).json({ error: "TMDB returned no popular actors" });
    }

    const startIndex = diffDays % popularData.results.length;
    let selectedActor = null;

    // 2. Validation loop with wraparound so all candidates are checked
    for (let offset = 0; offset < popularData.results.length && !selectedActor; offset++) {
      const personIndex = (startIndex + offset) % popularData.results.length;
      const candidate = popularData.results[personIndex];

      // Filtering for "Real" Actors with headshots
      if (candidate.known_for_department === "Acting" && candidate.profile_path) {
        
        // 3. Fetch Full Credits using your options format
        const detailRes = await fetch(
          `https://api.themoviedb.org/3/person/${candidate.id}?append_to_response=movie_credits`, 
          options
        );
        const detailData = await detailRes.json();

        // Filter for actual movie roles (ignoring "Self" or "Uncredited")
        const validMovies = (detailData.movie_credits?.cast || []).filter(m => 
          m.character && 
          !m.character.toLowerCase().includes('self') &&
          m.original_language === 'en' && 
            !m.character.toLowerCase().includes('voice')

        );

        if (validMovies.length >= 7) {
          selectedActor = {
            name: detailData.name,
            image: `https://image.tmdb.org/t/p/original${detailData.profile_path}`,
            movies: [...new Set(validMovies.map(m => m.title))]
          };
        }
      }
    }

    if (!selectedActor) {
      return res.status(404).json({ error: "No actor found" });
    }

    return res.json(selectedActor);
  } catch (err) {
    console.error("Fetch Error:", err);
    return res.status(404).json({ error: "No actor found" });
  }
})
apiRouter.post("/auth/create", async (req, res) => {    
    if(await findUser('email', req.body.email)){
        res.status(409).send({msg: "Existing User"})
    }
    else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
    return res.status(200).end();
    }
})

apiRouter.post("/auth/login", async(req, res) => {
    const user = await findUser("email", req.body.email)
    if (user){
        if(await bcrypt.compare(req.body.password, user.password)){
            user.token = uuid.v4();
            DB.updateUser(user);
            setAuthCookie(res, user.token);
      return res.status(200).end();
        }
    }
    res.status(401).send({msg: "Invalid email or password"});
})

apiRouter.delete("/auth/logout", async(req, res) => {
    const user = await findUser("token", req.cookies[authCookieName])
    if (user){
        await DB.removeAuth(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
})

const verify = async (req, res, next) => {
  const user = await findUser("token", req.cookies[authCookieName])
  if (user){
    req.user = user;
    return next();
  }

  return res.status(401).send({msg: "Unauthorized"});
}

apiRouter.get("/scores", verify, async(req, res) => {
    res.send(await DB.getScores());
})

apiRouter.post("/scores", verify, async(req, res) => {
  const incomingName = typeof req.body?.name === 'string' ? req.body.name : req.user?.email || 'anonymous';
  const incomingScore = Number(req.body?.score ?? 0);
  await DB.addScore({ name: incomingName, score: incomingScore });
        // scores.sort((a, b) => b.score - a.score);    //Sorting Scores is now handled in DB
        // if (scores.length > 5) {
        //     scores.length = 5; //keep only top 5 scores
        // }
        res.send(await DB.getScores());
})

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

async function createUser(email, password){
    const passwordHash = await bcrypt.hash(password,10);

    const newUser = {
        email: email,
        password: passwordHash,
        token: uuid.v4()
    }
    await DB.addUser(newUser);

    return newUser;
}


async function getScores(){
  return DB.getScores();
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
  });
}


const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


setupWebSocket(server);
