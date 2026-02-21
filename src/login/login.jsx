import React from 'react';
import '../app.css';

export function Login() {
    const [user, setUser] = React.useState(null);


    function register(event){
        event.preventdefault();

    }

  return (
    <main>
        <h2>Login to play today's Actordle</h2>
            <form onSubmit={register} className="credentials" action="play.html" method="get">
                <div>
                    <span>Username</span>
                    <input type="text" name="Username" placeholder="Username" required />
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