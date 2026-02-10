import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div className="body bg-dark text-light">
    <header class="container fluid">
        <h1 id="sitename">Actordle</h1>
        <nav>
            <menu class="navbar">
                <li class="navitem"><a class="navlink" href="index.html">Home</a></li>
                <li class="navitem"><a class="navlink" href="play.html">Play Actordle</a></li>
                <li class="navitem"><a class="navlink" href="leaderboard.html">Today's Leaderboard</a></li>
                <li class="navitem"><a class="navlink-active" href="about.html">What is Actordle?</a></li>
            </menu>
        </nav>
        <hr />
    </header>
    


    <main>APP COMPONENTS GO HERE</main>




    <footer>
        <hr />
        <p>Created by: Evan Foulk</p>
        <a href="https://github.com/efoulk4/Actordle">Actordle Github</a>
    </footer>
  </div>
  );
}