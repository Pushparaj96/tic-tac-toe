import Board from "./Board";
import GameStatus from "./GameStatus";

const GameScreen = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <GameStatus />
      <Board />
    </div>
  );
};

export default GameScreen;
