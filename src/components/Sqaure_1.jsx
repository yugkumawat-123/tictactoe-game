const Square_1 = ({ value, handleSquareClick, isWinningSquares }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquares ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={handleSquareClick}
    >
      {value}
    </button>
  );
};

export default Square_1;
