import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);

  console.log({ historyLength: history.length, currentMove });

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner['winner']) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.lenght;

      console.log(isTraversing);

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }

          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
    x;
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <>
      <div className="app">
        <StatusMessage winner={winner} gamingBoard={gamingBoard} />
        <Board
          squares={gamingBoard.squares}
          handleSquareClick={handleSquareClick}
        />

        <button
          type="button"
          onClick={onNewGameStart}
          className={` btn-reset ${winner['winner'] ? 'active' : ' '}`}
        >
          Start a new game
        </button>

        <h2>Current game history</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </>
  );
}

export default App;
