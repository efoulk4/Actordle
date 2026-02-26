import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authstate';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('currentUser') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
  <div className="body">
    <header>
        <h1 id="sitename">Actordle</h1>
        <nav>
            <menu className="navbar">
                <li className="navitem"><NavLink className="navlink" to="">Home</NavLink></li>
                <li className="navitem"><NavLink className="navlink" to="/play">Play Actordle</NavLink></li>
                <li className="navitem"><NavLink className="navlink" to="/scores">Today's Leaderboard</NavLink></li>
                <li className="navitem"><NavLink className="navlink" to="/about">What is Actordle?</NavLink></li>
            </menu>
        </nav>
        <hr />
    </header>
    


    <Routes>
        <Route path='/' element={<Login
        userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }} />} exact />
        <Route path='/play' element={<Play username={userName} />} />
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