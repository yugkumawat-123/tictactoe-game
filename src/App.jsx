import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner['winner']
    ? `Winner is ${winner['winner']}`
    : `Next player is ${nextPlayer}`;
  console.log(winner);
  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner['winner']) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  console.log(squares);

  return (
    <>
      <div className="app">
        <h5>{statusMessage} </h5>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </>
  );
}

export default App;
