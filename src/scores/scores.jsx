import React from 'react';
import '../app.css';

export function Scores() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <table id="lboard">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="lrow">
                        <td>1</td>
                        <td>James</td>
                        <td>8</td>
                    </tr>
                    <tr class="lrow">
                        <td>2</td>
                        <td>William</td>
                        <td>7</td>
                    </tr>
                    <tr class="lrow">
                        <td>3</td>
                        <td>Jill</td>
                        <td>7</td>
                    </tr>
                    <tr class="lrow">
                        <td>4</td>
                        <td>Emily</td>
                        <td>5</td>
                    </tr>
                    <tr class="lrow">
                        <td>5</td>
                        <td>Seth</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
      </div>
    </main>
  );
}