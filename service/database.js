const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');


const userCollection = db.collection('user');
const scoreCollection = db.collection('score');


(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email){
    return userCollection.findOne({email: email})
}

function getUserByToken(token){
    return userCollection.findOne({token: token})
}
async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}
async function removeAuth(user){
    await userCollection.updateOne({email: user.email}, {$unset: { token: 1 } });
}
async function getScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 5,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}
async function addScore(score) {
    await scoreCollection.insertOne(score);
}

module.exports = {
    getUser,
    getUserByToken,
    updateUser,
    removeAuth,
    getScores,
    addScore
};
