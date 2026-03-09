const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBkYTViZTg1N2MwZGEyZmE2ZjczMTFkZTAxN2E1NCIsIm5iZiI6MTc3Mjk0MTU4MC4wOTYsInN1YiI6IjY5YWNmMTBjMTUyMDZkNWFjOTRlYWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Unyx_r0z_e7lzXYTgOGp_iPAK6Dt7SSlSmD5RlKiJY'
  }
};


const authCookieName = 'token';

let users = [];
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

apiRouter.get("/actor", async (req, res) => {
    try {
        const today = new Date();
        const start = new Date(2026, 0, 1);
        const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));

        const page = Math.floor(diffDays / 20) + 1;
        const popularRes = await fetch(`${BASE_URL}/person/popular?api_key=${TMDB_API_KEY}&page=${page}`);
        const popularData = await popularRes.json();

        let personIndex = diffDays % 20;
        let selectedActor = null;

        while (!selectedActor && personIndex < popularData.results.length) {
            const candidate = popularData.results[personIndex];

            if (
                candidate.known_for_department === "Acting" && 
                candidate.profile_path && 
                candidate.popularity > 10 
            ) {
                const detailRes = await fetch(
                    `${BASE_URL}/person/${candidate.id}?api_key=${TMDB_API_KEY}&append_to_response=movie_credits`
                );
                const detailData = await detailRes.json();

                const validMovies = detailData.movie_credits.cast.filter(m => 
                    m.character && 
                    !m.character.toLowerCase().includes('self')
                );

                if (validMovies.length >= 5) {
                    selectedActor = {
                        name: detailData.name,
                        image: `https://image.tmdb.org/t/p/original${detailData.profile_path}`,
                        movies: [...new Set(validMovies.map(m => m.title))] 
                    };
                }
            }
            personIndex++;
        }

        return selectedActor;

    } catch (error) {
        console.error("Filtering Error:", error);
        return null;
    }
})

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post("/auth/create", async (req, res) => {    
    if(findUser('email', req.body.email)){
        res.status(409).send({msg: "Existing User"})
    }
    else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
    }
})

apiRouter.post("/auth/login", async(req, res) => {
    const user = findUser("email", req.body.email)
    if (user){
        if(bcrypt.compare(req.body.password, user.password)){
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            return;
        }
    }
    res.status(401).send({msg: "Invalid email or password"});
})

apiRouter.delete("/auth/logout", async(req, res) => {
    const user = await findUser("token", req.cookies[authCookieName])
    if (user){
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
})

const verify = (req, res, next) => {
    const user = findUser("token", req.cookies[authCookieName])
    if (user){
        next();
    }
    else {
        res.status(401).send({msg: "Unauthorized"});
    }
}

apiRouter.get("/scores", verify, async(req, res) => {
    res.send(scores);
})

apiRouter.post("/scores", verify, async(req, res) => {
        scores.push(req.body.score);
        res.send(scores);
})

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

async function createUser(email, password){
    const passwordHash = await bcrypt.hash(password,10);

    const newUser = {
        email: email,
        password: passwordHash,
        token: uuid.v4()
    }
    users.push(newUser);

    return newUser;
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
