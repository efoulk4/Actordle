import React, { useEffect } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import { notifier } from './scoreNotifier';

function formatTime(t){
        const minutes = Math.floor(t / 60);
        const seconds = t % 60;
        if (seconds < 10){
            return `Time Remaining: ${minutes}:0${seconds}`;
        }
        else{
            return `Time Remaining: ${minutes}:${seconds}`;    
        }}

export function Game(props) {
 const [todaysActor, setTodaysActor] = React.useState(null);
 const [secondsLeft, setSecondsLeft] = React.useState(90);
 const [currentGuess, setCurrentGuess] = React.useState('');
 const [currentScore, setCurrentScore] = React.useState(0);
 const [guessedMovies, setGuessedMovies] = React.useState([]);
 const rawUsername = props.username || 'Guest';
 const username = rawUsername.includes('@') ? rawUsername.split('@')[0] : rawUsername;
 const navigate = useNavigate();

 useEffect(() => {
    fetch("/api/actor")
    .then((response) => response.json())
    .then((response) => {
        setTodaysActor(response);
    })
 }, [])

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
        async function saveScore(score) {
            const newScore = {name: username, score: currentScore};
            const eventText = `${newScore.name} just scored ${newScore.score}!`;
            notifier.soundTheAlarm(eventText);
            await fetch('/api/scores', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(newScore),
            });}
        saveScore({name: username, score: currentScore});
        navigate("/scores");
    }
 }, [secondsLeft, navigate]
);

    function handleGuess(event){
        event.preventDefault();
        const guess = currentGuess.trim();
        if (!guess) {
            setCurrentGuess('');
            return;
        }

        const alreadyGuessed = guessedMovies.some(
            (movie) => movie.toLowerCase() === guess.toLowerCase()
        );

        const matchedMovie = todaysActor?.movies?.find(
            (movie) => movie.toLowerCase() === guess.toLowerCase()
        );

        if (matchedMovie && !alreadyGuessed){
            setCurrentScore((prev) => prev + 1);
            setGuessedMovies((prev) => [...prev, matchedMovie]);
        }
        setCurrentGuess('');
    }


  return (
    <section>
          <p>{username}</p>
            <section className="playboard">
                <h2>{formatTime(secondsLeft)}</h2>
                <img src="Camera.png" height="150" width="150" alt="Film Camera" />
            </section>
            <section id="todaysactor">
                <p>Today's Actor from TMDB is</p>
                <h2 style={{fontSize: '1em' }}>{todaysActor?.name ?? 'Loading actor...'}</h2>
                {todaysActor?.image ? (
                    <img src={todaysActor.image} alt={`image of ${todaysActor.name}`} className="actorimage" />
                ) : (
                    <p>Fetching actor image...</p>
                )}
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
    </section>
  );
}