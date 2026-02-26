export const actors = [
    {
        name: "Brad Pitt",
        image: "https://image.tmdb.org/t/p/original/cckcYc2v0yh1tc9QjRelptcOBko.jpg",
        movies: ["Fight Club", "Once Upon a Time in Hollywood", "Inglourious Basterds", "Se7en",    "Ocean's Eleven", "12 Monkeys", "The Curious Case of Benjamin Button", "Moneyball", "World War Z", "Troy"   ]
    },
    {
        name: "Meryl Streep",
        image: "https://image.tmdb.org/t/p/original/emAAzyK1rJ6aiMi0wsWYp51EC3h.jpg",
        movies: ["The Devil Wears Prada", "Out of Africa", "Sophie’s Choice", "Mamma Mia!", "Kramer vs. Kramer", "Doubt", "The Iron Lady", "August: Osage County", "Florence Foster Jenkins", "The Post"]
    },
    {
        name: "Leonardo DiCaprio",
        image: "https://image.tmdb.org/t/p/original/vo4fltT9zZ1kH8nhLetz8MED6jp.jpg",
        movies: ["The Revenant", "Inception", "The Wolf of Wall Street", "Titanic", "Shutter Island", "Django Unchained", "Catch Me If You Can", "The Great Gatsby", "Gangs of New York", "Once Upon a Time in Hollywood"]
    },
    {
        name: "Scarlett Johansson",
        image: "https://image.tmdb.org/t/p/original/kcGQvyJZdOQFjw1RHTePnX5gxmB.jpg",
        movies: ["Marriage Story", "Lucy", "The Avengers",  "Lost in Translation", "Under the Skin", "Her", "Ghost in the Shell", "Jojo Rabbit", "Black Widow", "Don Jon"]
    },
    {
        name: "Denzel Washington",
        image: "https://image.tmdb.org/t/p/original/9Iyt3wbsla5bM6IzbICDVnBhkER.jpg",
        movies: ["Training Day", "Fences", "The Magnificent Seven", "Glory", "Remember the Titans", "Flight", "The Equalizer", "Malcolm X", "The Book of Eli", "Inside Man"]
    },
    {
        name: "Jennifer Lawrence",
        image: "https://image.tmdb.org/t/p/original/k6CsASaySnS3ag0Y2Ns2vqPahVn.jpg",
        movies: ["Silver Linings Playbook", "The Hunger Games", "X-Men", "American Hustle", "Joy", "Passengers", "Red Sparrow", "Mother!", "Winter's Bone", "Serena"]
    },
    {
        name: "Tom Hanks",
        image: "https://image.tmdb.org/t/p/original/oFvZoKI6lvU03n4YoNGAll9rkas.jpg",
        movies: ["Forrest Gump", "Cast Away", "The Green Mile", "Saving Private Ryan", "Toy Story", "Big", "Philadelphia", "Apollo 13", "Sully", "Captain Phillips"]
    },
    {
        name: "Natalie Portman",
        image: "https://image.tmdb.org/t/p/original/mqKHKayGsEK3TOZDHs3eUAhCP6V.jpg",
        movies: ["Black Swan", "V for Vendetta", "Star Wars", "The Avengers", "Thor", "X-Men: First Class", "The Other Woman", "Hanna", "Love & Other Drugs", "Annihilation"]
    },
    {
        name: "Morgan Freeman",
        image: "https://image.tmdb.org/t/p/original/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
        movies: ["The Shawshank Redemption", "Bruce Almighty", "Million Dollar Baby", "The Dark Knight", "Unforgiven", "The Legend of Bagger Vance", "The Kite Runner", "The Bucket List", "The Manchurian Candidate", "The Sum of All Fears"]
    },
    {
        name: "Emma Stone",
        image: "https://image.tmdb.org/t/p/original/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg",
        movies: ["La La Land", "The Help", "Easy A", "Birdman", "Crazy, Stupid, Love.", "The Amazing Spider-Man", "Zombieland", "Gangster Squad", "Aloha", "Maniac"]
    }
];

export function getTodaysActor() {
    const today = new Date();
    const start = new Date(2026, 0, 1); // Jan 1, 2026
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const index = diffDays % actors.length;
    return actors[index];
}



export function registerUser(email, password) {
  const users = JSON.parse((localStorage.getItem('users') || '[]'));
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
}


export function loginUser(email, password) {
    const users = JSON.parse((localStorage.getItem('users') || '[]'));

  return users.find(u => u.email === email && u.password === password);}

export function formatTime(t){
        const minutes = Math.floor(t / 60);
        const seconds = t % 60;
        if (seconds < 10){
            return `Time Remaining: ${minutes}:0${seconds}`;
        }
        else{
            return `Time Remaining: ${minutes}:${seconds}`;    
        }}