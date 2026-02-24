import React from 'react';
import '../app.css';

export function Scores() {
    const score = JSON.parse((localStorage.getItem('scores') || '[]'));
  return (
    <main>
        <table id="lboard">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                  {score.length === 0 || score.filter(u => u.name && u.score !== undefined).length === 0 ? (
                    <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                        Play a round to display your scores
                    </td>
                    </tr>
                ) : (
                    score.map((user, index) => (
                    <tr className='lrow' key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.score}</td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
    </main>
  );
}