import React, { useEffect } from 'react';
import '../app.css';
import { Game } from './game';
import { Updates } from './updates';

export function Play(props) {
    return (
        <main>
            <Game username={props.username}/>
            <Updates username={props.username}/>
        </main>
    );
}