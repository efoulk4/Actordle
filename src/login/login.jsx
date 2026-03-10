import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authstate';
import { Authenticated } from '/authLogin'
import { Unauthenticated } from '/unAuthLogin'
import '../app.css';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
        <div>
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}