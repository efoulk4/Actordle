import React from 'react';
import '../app.css';

export function Play() {
  return (
    <main>
          <p>USERNAME</p>
            <section className="playboard">
                <h2>Time Remaining: 1:30</h2>
                <img src="Camera.png" height="150" width="150" alt="Film Camera" />
            </section>
            <section id="todaysactor">
                <p>Today's Actor from TMDB is</p>
                <h2 style={{fontSize: '1em' }}>TOM HANKS</h2>
                <img src="tomhanks.png" alt="image of Tom Hanks" className="actorimage" />
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