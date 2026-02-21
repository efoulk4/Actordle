export const actors = [
    {
        name: "Brad Pitt",
        image: "https://image.tmdb.org/t/p/original/cckcYc2v0yh1tc9QjRelptcOBko.jpg",
        movies: ["Fight Club", "Once Upon a Time in Hollywood", "Inglourious Basterds"]
    },
    {
        name: "Meryl Streep",
        image: "https://image.tmdb.org/t/p/original/emAAzyK1rJ6aiMi0wsWYp51EC3h.jpg",
        movies: ["The Devil Wears Prada", "Out of Africa", "Sophie’s Choice"]
    },
    {
        name: "Leonardo DiCaprio",
        image: "https://image.tmdb.org/t/p/original/vo4fltT9zZ1kH8nhLetz8MED6jp.jpg",
        movies: ["The Revenant", "Inception", "The Wolf of Wall Street"]
    },
    {
        name: "Scarlett Johansson",
        image: "https://image.tmdb.org/t/p/original/kcGQvyJZdOQFjw1RHTePnX5gxmB.jpg",
        movies: ["Marriage Story", "Lucy", "The Avengers"]
    },
    {
        name: "Denzel Washington",
        image: "https://image.tmdb.org/t/p/original/9Iyt3wbsla5bM6IzbICDVnBhkER.jpg",
        movies: ["Training Day", "Fences", "The Magnificent Seven"]
    },
    {
        name: "Jennifer Lawrence",
        image: "https://image.tmdb.org/t/p/original/k6CsASaySnS3ag0Y2Ns2vqPahVn.jpg",
        movies: ["Silver Linings Playbook", "The Hunger Games", "X-Men"]
    },
    {
        name: "Tom Hanks",
        image: "https://image.tmdb.org/t/p/original/oFvZoKI6lvU03n4YoNGAll9rkas.jpg",
        movies: ["Forrest Gump", "Cast Away", "The Green Mile"]
    },
    {
        name: "Natalie Portman",
        image: "https://image.tmdb.org/t/p/original/mqKHKayGsEK3TOZDHs3eUAhCP6V.jpg",
        movies: ["Black Swan", "V for Vendetta", "Star Wars"]
    },
    {
        name: "Morgan Freeman",
        image: "https://image.tmdb.org/t/p/original/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
        movies: ["The Shawshank Redemption", "Bruce Almighty", "Million Dollar Baby"]
    },
    {
        name: "Emma Stone",
        image: "https://image.tmdb.org/t/p/original/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg",
        movies: ["La La Land", "The Help", "Easy A"]
    }
];

export function getTodaysActor() {
    const random = Math.floor(Math.random() * actors.length);
    return actors[random];
  }



export function registerUser(email, password) {
  const users = JSON.parse((localStorage.getItem('users') || '[]'));
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
}


export function loginUser(email, password) {
    const users = JSON.parse((localStorage.getItem('users') || '[]'));

  return users.find(u => u.email === email && u.password === password);}