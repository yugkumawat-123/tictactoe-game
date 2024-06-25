const Square_1 = ({ value, handleSquareClick }) => {
  return (
    <button type="button" className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
};

export default Square_1;
