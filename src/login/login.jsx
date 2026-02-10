import React from 'react';
import '../app.css';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h2>Login to play today's Actordle</h2>
            <form class="credentials" action="play.html" method="get">
                <div>
                    <span>Username</span>
                    <input type="text" name="Username" placeholder="Username" required />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" name="Password" placeholder="Password" required />
                </div>
                <button class="btn btn-primary" type="submit">Login</button>
            </form>
            <br />
            <h2>Don't have an account?</h2>
            <form class="credentials" action="play.html" method="get">
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
                <button class="btn btn-secondary" type="submit">Create Account</button>
            </form>
      </div>
    </main>
  );
}