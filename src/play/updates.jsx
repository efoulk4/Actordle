import React, { useState, useEffect } from 'react';
import '../app.css';
import './scoreNotifier'
import { notifier } from './scoreNotifier';  
export function Updates() {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
    notifier.addHandler(appendEvents)
      return () => {
      notifier.removeHandler(appendEvents);
    };

}, [])

function appendEvents(event){
    setEvents([...events, event]);
}

  





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