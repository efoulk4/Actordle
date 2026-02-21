const actors = [
    { name: 'Brad Pitt', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Brad_Pitt_Cannes_2019.jpg/440px-Brad_Pitt_Cannes_2019.jpg', movies: ['Fight Club', 'Once Upon a Time in Hollywood', 'Inglourious Basterds'] },
    { name: 'Meryl Streep', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Meryl_Streep_2012.jpg/440px-Meryl_Streep_2012.jpg', movies: ['The Devil Wears Prada', 'Out of Africa', 'Sophie\'s Choice'] },
    { name: 'Leonardo DiCaprio', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Leonardo_DiCaprio_66ème_Festival_de_Venise.jpg/440px-Leonardo_DiCaprio_66ème_Festival_de_Venise.jpg', movies: ['The Revenant', 'Inception', 'The Wolf of Wall Street'] },
    { name: 'Scarlett Johansson', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Scarlett_Johansson_by_Gage_Skidmore.jpg/440px-Scarlett_Johansson_by_Gage_Skidmore.jpg', movies: ['Marriage Story', 'Lucy', 'The Avengers'] },
    { name: 'Denzel Washington', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Denzel_Washington_2012.jpg/440px-Denzel_Washington_2012.jpg', movies: ['Training Day', 'Fences', 'The Magnificent Seven'] },
    { name: 'Jennifer Lawrence', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jennifer_Lawrence_SDCC_2015.jpg/440px-Jennifer_Lawrence_SDCC_2015.jpg', movies: ['Silver Linings Playbook', 'The Hunger Games', 'X-Men'] },
    { name: 'Tom Hanks', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/440px-Tom_Hanks_TIFF_2019.jpg', movies: ['Forrest Gump', 'Cast Away', 'The Green Mile'] },
    { name: 'Natalie Portman', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Natalie_Portman_Cannes_2015.jpg/440px-Natalie_Portman_Cannes_2015.jpg', movies: ['Black Swan', 'V for Vendetta', 'Star Wars'] },
    { name: 'Morgan Freeman', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Morgan_Freeman_Deauville_2018.jpg/440px-Morgan_Freeman_Deauville_2018.jpg', movies: ['The Shawshank Redemption', 'Bruce Almighty', 'Million Dollar Baby'] },
    { name: 'Emma Stone', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emma_Stone_SDCC_2015.jpg/440px-Emma_Stone_SDCC_2015.jpg', movies: ['La La Land', 'The Help', 'Easy A'] }
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