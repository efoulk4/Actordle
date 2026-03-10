import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authstate';
import '../app.css';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigate = useNavigate();

    async function registerUser() {
    const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
            },
        body: JSON.stringify({ email: userName, password: password })
    })
    if (response.status == 200){
        localStorage.setItem('currentUser', userName);
        props.onLogin(userName)
    }
    else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }

}
async function loginUser(){
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
            },
        body: JSON.stringify({ email: userName, password })

    });
    if (response.status == 200){
        localStorage.setItem('currentUser', userName);
        props.onLogin(userName)
    }
    else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }

}


  return (
    <main>
        <h2>Login to play today's Actordle</h2>
            <form onSubmit={() => loginUser()} className="credentials">
                <div>
                    <span>Email</span>
                    <input type="email" name="Email" placeholder="Email" required onChange ={(e) => setUserName(e.target.value)}/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" name="Password" placeholder="Password" required onChange ={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <br />
            <h2>Don't have an account?</h2>
            <form onSubmit={() => registerUser()} className="credentials">
                <div>
                    <span>Email</span>
                    <input type="email" name="Email" placeholder="Email" required onChange ={(e) => setUserName(e.target.value)}/>
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