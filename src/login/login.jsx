import React from 'react';
import { registerUser, loginUser } from '../service';
import '../app.css';

export function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    function register(event){
        event.preventDefault();
        registerUser(email, password);
    }

    function login(event){
        event.preventDefault();
        const user = loginUser(email, password);
        if(!user){
            alert('Invalid email or password');
        }
        else{
            //add code to redirect to play page
        }
    }

  return (
    <main>
        <h2>Login to play today's Actordle</h2>
            <form onSubmit={login} className="credentials" action="play.html" method="get">
                <div>
                    <span>Email</span>
                    <input type="email" name="Email" placeholder="Email" required />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" name="Password" placeholder="Password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <br />
            <h2>Don't have an account?</h2>
            <form className="credentials" action="play.html" method="get">
                <div>
                    <span>Username</span> 
                    <input type="text" placeholder="Username" required />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" placeholder="Password" required />
                </div>
                <div>
                    <span>Confirm Password</span>
                    <input type="password" placeholder=" Password" required />
                </div>
                <button className="btn btn-secondary" type="submit">Create Account</button>
            </form>
    </main>
  );
}