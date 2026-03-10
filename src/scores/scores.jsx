import React from 'react';
import '../app.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);


    React.useEffect(() => {
        async function fetchScores() {
            const response = await fetch('/api/scores');
            if (response.status == 200){
                return await response.json();
            }
            else {
                return [];
            }
        }

      async function loadScores() {
        const sortedScores = await fetchScores();
        setScores(sortedScores);
      }

      loadScores();
    }, []);

      const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      const displayName = (typeof score?.name === 'string' && score.name.length > 0)
        ? score.name.split('@')[0]
        : 'unknown';

      scoreRows.push(
        <tr className='lrow' key={i}>
          <td>{i+1}</td>
          <td>{displayName}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }
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
                    {scoreRows}
                </tbody>
            </table>
    </main>
  );
}