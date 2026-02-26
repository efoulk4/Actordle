import React, { useEffect } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import { getTodaysActor, formatTime } from '../service';
import { use } from 'react';

export function Game(props) {
 const [todaysActor] = React.useState(getTodaysActor());
 const [secondsLeft, setSecondsLeft] = React.useState(90);
 const [currentGuess, setCurrentGuess] = React.useState('');
 const [currentScore, setCurrentScore] = React.useState(0);
 const [guessedMovies, setGuessedMovies] = React.useState([]);
 const username = props.username || 'Guest';
 const navigate = useNavigate();

 useEffect(() => {
 const id = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(id); //stop timer
                    return 0; //so if secondsLeft == 0 then the timer has expired
                }
                return prev-1;
            })
        }, 1000); // one second increments

        return () => clearInterval(id);
    }, [])

 useEffect(() => {
    if (secondsLeft == 0) {
        const score = JSON.parse((localStorage.getItem('scores') || '[]'));
        score.push({name: username, score: currentScore});
        localStorage.setItem('scores', JSON.stringify(score))
        navigate("/scores");
    }
 }, [secondsLeft, navigate]
);

    function handleGuess(event){
        event.preventDefault();
        if (todaysActor.movies.includes(currentGuess)){
            setCurrentScore(currentScore+1);
            setGuessedMovies([...guessedMovies,currentGuess]);
        }
        setCurrentGuess('');
    }


  return (
    <main>
          <p>{username}</p>
            <section className="playboard">
                <h2>{formatTime(secondsLeft)}</h2>
                <img src="Camera.png" height="150" width="150" alt="Film Camera" />
            </section>
            <section id="todaysactor">
                <p>Today's Actor from TMDB is</p>
                <h2 style={{fontSize: '1em' }}>{todaysActor.name}</h2>
                <img src={todaysActor.image} alt={`image of ${todaysActor.name}`} className="actorimage" />
            </section>
            <h3 style={{fontSize: 'smaller' }}>Was featured in...</h3>
            <table className="prevguesses">
                <thead>
                    <tr>
                        <td style={{ fontWeight: 'bold', fontSize: 'larger' }}>MOVIES</td>
                    </tr>
                </thead>
                <tbody>
                    {guessedMovies.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <form name="guessbox" onSubmit={handleGuess}>
            <input type="text" placeholder="Movie" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)}/>
            <button className="btn btn-primary btn-lg" type="submit">Submit Guess</button>
            </form>
    </main>
  );
}