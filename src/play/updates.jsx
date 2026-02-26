import React, { useState, useEffect } from 'react';
import '../app.css';
           
export function Updates() {
    const randomNames = [ 'Emily', 'Michael', 'Sarah', 'David', 'Jessica', 'Daniel', 'Ashley', 'James', 'Amanda', 'John'];
    const randomScore = Math.floor(Math.random() * 10) + 1;
    const [events, setEvents] = React.useState([]);
    setInterval(() => {
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        const newEvent = `${randomName} just scored ${randomScore} points!`;
        setEvents((prevEvents) => [newEvent, ...prevEvents.slice(0, 1)]); //keep only the 1 most recent events
    }, 5000);






return (
    <section className="abovefooter">
        <h2>Friends Playing</h2>
        <table className="events" style={{margin: '0 auto'}}>
            <tbody>
                {events.map((event, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>{event}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);
}