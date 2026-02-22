import React, { useEffect } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import { getTodaysActor, formatTime } from '../service';

export function Play() {
 const [todaysActor] = React.useState(getTodaysActor());
 const [secondsLeft, setSecondsLeft] = React.useState(90);
 const [currentGuess, setCurrentGuess] = React.useState('');

 useEffect(() => {
 const id = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(); //stop timer
                    return 0; //so if secondsLeft == 0 then the timer has expired
                }
                return prev-1;
            })
        }, 1000); // one second increments

        return () => clearInterval(id);
    }, [])

    function handleGuess(event){
        event.preventDefault();
        
    }


  return (
    <main>
          <p>USERNAME</p>
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
                    <tr>
                        <td>Forrest Gump</td>
                    </tr>
                    <tr>
                        <td>Apollo 13</td>
                    </tr>
                </tbody>
            </table>
            <form name="guessbox" onSubmit={handleGuess}>
            <input type="text" placeholder="Movie" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)}/>
            <button className="btn btn-primary btn-lg" type="submit">Submit Guess</button>
            </form>
            <section className="abovefooter">
                <h2>Friends Playing</h2>
                <p>James just guessed his 5th correct movie for the day!</p>
            </section>
    </main>
  );
}