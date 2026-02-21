import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../service';
import '../app.css';

export function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();



    function register(event){
        event.preventDefault();
        registerUser(email, password);
        navigate('/play');
        }

    function login(event){
        event.preventDefault();
        const user = loginUser(email, password);
        if(!user){
            alert('Invalid email or password');
        }
        else{
            navigate('/play');
        }
    }

  return (
    <main>
        <h2>Login to play today's Actordle</h2>
            <form onSubmit={login} className="credentials">
                <div>
                    <span>Email</span>
                    <input type="email" name="Email" placeholder="Email" required onChange ={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" name="Password" placeholder="Password" required onChange ={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <br />
            <h2>Don't have an account?</h2>
            <form onSubmit={register} className="credentials">
                <div>
                    <span>Email</span>
                    <input type="email" name="Email" placeholder="Email" required onChange ={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" name="Password" placeholder="Password" required onChange ={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <span>Confirm Password</span>
                    <input type="password" name="ConfirmPassword" placeholder="Password" required onChange ={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <button className="btn btn-secondary" type="submit">Create Account</button>
            </form>
    </main>
  );
}