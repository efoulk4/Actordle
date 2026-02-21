const actors = [
    { 
        name: 'Brad Pitt', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg', 
        movies: ['Fight Club', 'Once Upon a Time in Hollywood', 'Inglourious Basterds'] 
    },
    { 
        name: 'Meryl Streep', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Meryl_Streep_at_the_61st_Berlinale.jpg', 
        movies: ['The Devil Wears Prada', 'Out of Africa', 'Sophie\'s Choice'] 
    },
    { 
        name: 'Leonardo DiCaprio', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg', 
        movies: ['The Revenant', 'Inception', 'The Wolf of Wall Street'] 
    },
    { 
        name: 'Scarlett Johansson', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2.jpg', 
        movies: ['Marriage Story', 'Lucy', 'The Avengers'] 
    },
    { 
        name: 'Denzel Washington', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg', 
        movies: ['Training Day', 'Fences', 'The Magnificent Seven'] 
    },
    { 
        name: 'Jennifer Lawrence', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Jennifer_Lawrence_in_2016.jpg', 
        movies: ['Silver Linings Playbook', 'The Hunger Games', 'X-Men'] 
    },
    { 
        name: 'Tom Hanks', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg', 
        movies: ['Forrest Gump', 'Cast Away', 'The Green Mile'] 
    },
    { 
        name: 'Natalie Portman', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Natalie_Portman_%2848470988352%29.jpg', 
        movies: ['Black Swan', 'V for Vendetta', 'Star Wars'] 
    },
    { 
        name: 'Morgan Freeman', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Morgan_Freeman_2006.jpg', 
        movies: ['The Shawshank Redemption', 'Bruce Almighty', 'Million Dollar Baby'] 
    },
    { 
        name: 'Emma Stone', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Emma_Stone_at_the_32nd_Santa_Barbara_International_Film_Festival.jpg', 
        movies: ['La La Land', 'The Help', 'Easy A'] 
    }
];


export function getTodaysActor() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return actors[dayOfYear % actors.length];
}


export function registerUser(email, password) {
  const users = JSON.parse((localStorage.getItem('users') || '[]'));
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
}


export function loginUser(email, password) {
    const users = JSON.parse((localStorage.getItem('users') || '[]'));

  return users.find(u => u.email === email && u.password === password);}