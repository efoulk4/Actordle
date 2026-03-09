import React from 'react';
import '../app.css';

export function About() {
  const [movie, setMovie] = React.useState(null);
  const [quoteMovie, setQuoteMovies] = React.useState('unknown');
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBkYTViZTg1N2MwZGEyZmE2ZjczMTFkZTAxN2E1NCIsIm5iZiI6MTc3Mjk0MTU4MC4wOTYsInN1YiI6IjY5YWNmMTBjMTUyMDZkNWFjOTRlYWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Unyx_r0z_e7lzXYTgOGp_iPAK6Dt7SSlSmD5RlKiJY'
  }
};

  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming', options)
      .then(res => res.json())
      .then(res => {
        if (json.results && json.results.length > 0) {
        const firstMovie = json.results[0];

        setMovie({
          title: firstMovie.title,
          summary: firstMovie.overview,
          releaseDate: firstMovie.release_date
        })
      }

      })
      .catch(err => console.error(err));

  }, []);
  return (
    <main>
      <section>
        <div id="displayboard">

        </div>
        <div>
          <h2>What is Actordle?</h2>
              <p  className="about">We've all met that one person who knows way too much about movies -- but how much do they really know?
              Actordle stretches your knowledge of cinema to the very limit by challenging users to name as many movies 
              a given actor/actress was featured in. Climb the leaderboard and share your results to see who actually knows
              the classics best out of your friends and family. 
              </p>
          <h2>How to Play</h2>
              <p  className="about">Each day, a new Actor/Actress will be chosen. Your job as an Actordler is to name as many movies that the
                  actor/actress starred or was featured in. You have 1:30 to do so.
                  You may discover that some of your favorite actors/actresses are in films you never expected. Use this as
                  an opportunity to broaden your horizons and find some incredible new films!
              </p>
          </div>
        </section>  
    </main>
  );
}