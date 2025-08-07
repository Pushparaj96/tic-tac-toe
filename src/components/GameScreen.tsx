import Board from "./Board";
import GameStatus from "./GameStatus";

const GameScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <div className="bg-bgColor border-2 border-headerTitleSecondary rounded-2xl shadow-lg p-8 md:p-12 max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <GameStatus />
          <Board />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
