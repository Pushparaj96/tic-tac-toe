import { HomeIcon, Recycle } from "lucide-react";
import { useGame } from "../context/GameContext";

const GameStatus = () => {
  const { state, dispatch } = useGame();
  const { winner, currentPlayer, gameStarted } = state;
  let message = "";

  const handleNewGame = () => {
    const confirmReset = confirm("Are you sure you want to start new Game?");
    if (confirmReset) {
      dispatch({ type: "RESET_GAME" });
    }
  };

  const handleHomeClick = () => {
    const confirmGridChange = confirm("Are you sure , Game will reset?");
    if (confirmGridChange) {
      dispatch({ type: "GO_HOME" });
    }
  };

  if (winner === "draw") {
    message = "It's a draw 🤝";
  } else if (winner) {
    message = `Player ${winner} wins 🎉`;
  } else if (gameStarted) {
    message = `Player ${currentPlayer}'s turn`;
  }
  return (
    <div className="flex flex-col items-center gap-3 text-center my-4">
      <p className="text-xl md:text-2xl font-semibold text-textColor">
        {message}
      </p>
      {gameStarted && (
        <div className="flex gap-5">
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-2 px-3 py-1 border rounded text-sm text-textColor hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <HomeIcon size={16} />
            Home
          </button>

          <button
            onClick={handleNewGame}
            className="flex items-center gap-2 px-3 py-1 border rounded text-sm text-textColor hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Recycle size={16} />
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default GameStatus;
