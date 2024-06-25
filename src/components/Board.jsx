import { useState } from 'react';
import Square_1 from './Sqaure_1';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsNext(currentIsNext => !currentIsNext);
  };

  console.log(squares);

  const renderSquare = position => {
    return (
      <Square_1
        value={squares[position]}
        handleSquareClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
