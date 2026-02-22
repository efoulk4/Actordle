import React, { useEffect } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import { getTodaysActor } from '../service';

export function Play() {
 const todaysActor = getTodaysActor();
 const [secondsLeft, setSecondsLeft] = React.useState(90);

 useEffect(() => {
 const id = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(); //stop timer
                    setTimerId(null); //identify expired timer
                    return 0; //so if seconds == 0 then the timer has expired
                }
                return prev-1;
            })
        }, 1000); // one second increments

        return () => clearInterval(id);
    }, [])


  return (
    <main>
          <p>USERNAME</p>
            <section className="playboard">
                <h2>Time Remaining: 1:30</h2>
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
            <form name="guessbox">
            <input type="text" placeholder="Movie" />
            <button className="btn btn-primary btn-lg" type="submit">Submit Guess</button>
            </form>
            <section className="abovefooter">
                <h2>Friends Playing</h2>
                <p>James just guessed his 5th correct movie for the day!</p>
            </section>
    </main>
  );
}