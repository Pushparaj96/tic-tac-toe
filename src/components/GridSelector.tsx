import { useGame } from "../context/GameContext";

const GridSelector = () => {
  const { state, dispatch } = useGame();
  const { gridSize, gameStarted } = state;

  const handleSelect = (size: 3 | 4) => {
    if (gameStarted) return;
    dispatch({ type: "SET_GRID_SIZE", payload: size });
  };

  const startGame = () => {
    dispatch({ type: "START_GAME" });
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10 border-winGlow border-2">
      <h1 className="text-xl md:text-2xl font-semibold shadow-md">
        Choose Board
      </h1>
      <div className="flex gap-4">
        {[3, 4].map((size) => (
          <button
            key={size}
            disabled={gameStarted}
            onClick={() => handleSelect(size as 3 | 4)}
            className={`px-6 py-3 rounded-lg text-lg font-semibold border-2 transition-all duration-200 
                    ${
                      gridSize === size
                        ? "border-blue-500 bg-blue-100 dark:bg-blue-800"
                        : "border-gray-400"
                    }
                    ${
                      gameStarted
                        ? "cursor-not-allowed opacity-50"
                        : "hover: border-blue-500"
                    }
                    `}
          >
            {size} x {size}
          </button>
        ))}
      </div>

      <button
        disabled={gameStarted}
        onClick={startGame}
        className={`mt-4 px-6 py-3 rounded-lg text-white text-lg font-bold bg-green-500
        hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        Start Game
      </button>
    </div>
  );
};

export default GridSelector;
