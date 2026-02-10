import React from 'react';
import '../app.css';

export function About() {
  return (
    <main className="container-fluid bg-secondary text-center">
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
    </main>
  );
}