import Square_1 from './Sqaure_1';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square_1 value="0" />
        <Square_1 value="1" />
        <Square_1 value="2" />
      </div>
      <div className="board-row">
        <Square_1 value="3" />
        <Square_1 value="4" />
        <Square_1 value="5" />
      </div>
      <div className="board-row">
        <Square_1 value="6" />
        <Square_1 value="7" />
        <Square_1 value="8" />
      </div>
    </div>
  );
};

export default Board;
