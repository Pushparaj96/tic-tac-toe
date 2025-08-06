import { useGame } from "../context/GameContext";
import Cell from "./Cell";

const Board = () => {
  const { state } = useGame();
  const { board, gridSize } = state;

  const gridStyle = {
    gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
  };
  return (
    <div className="grid gap-2 p-4 max-w-screen-sm w-full" style={gridStyle}>
      {board.map((value, index) => (
        <Cell key={index} index={index} value={value} />
      ))}
    </div>
  );
};

export default Board;
