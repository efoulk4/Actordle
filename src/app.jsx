import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
  <div className="body bg-dark text-light">
    <header class="container fluid">
        <h1 id="sitename">Actordle</h1>
        <nav>
            <menu class="navbar">
                <li class="navitem"><Navlink className="navlink" to="index">Home</Navlink></li>
                <li class="navitem"><Navlink className="navlink" to="play">Play Actordle</Navlink></li>
                <li class="navitem"><Navlink className="navlink" to="scores">Today's Leaderboard</Navlink></li>
                <li class="navitem"><Navlink className="navlink-active" to="about">What is Actordle?</Navlink></li>
            </menu>
        </nav>
        <hr />
    </header>
    


    <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/play' element={<Play />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
    </Routes>




    <footer>
        <hr />
        <p>Created by: Evan Foulk</p>
        <a href="https://github.com/efoulk4/Actordle">Actordle Github</a>
    </footer>
  </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}