import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authstate';
import '../app.css';

export function Authenticated(props) {
    const navigate = useNavigate();

    async function logout(event){
        event.preventDefault();
        await fetch('/api/auth/logout', {
            method: 'DELETE',
            credentials: 'include'
        });
        localStorage.removeItem('currentUser');
        props.onLogout();
        navigate('/');
    }

    return (
        <div className='auth-container'>
            <h2>Welcome, {props.userName}!</h2>
            <button className='auth-button' onClick={logout}>Logout</button>
        </div>
    );
}   