const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();


const authCookieName = 'token';

let users = [];
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

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
