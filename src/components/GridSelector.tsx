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
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <div className="bg-bgColor border-4 border-headerTitleSecondary rounded-2xl shadow-lg p-8 md:p-12 max-w-md w-full">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-xl md:text-2xl font-semibold text-textColor">
            Choose Board Size
          </h2>

          <div className="flex gap-4 w-full">
            {[3, 4].map((size) => (
              <button
                key={size}
                disabled={gameStarted}
                onClick={() => handleSelect(size as 3 | 4)}
                className={`flex-1 px-6 py-4 rounded-xl text-lg font-semibold border-2 transition-all duration-200
                ${
                  gridSize === size
                    ? "border-blue-500 bg-blue-100 dark:bg-blue-800 scale-105"
                    : "border-gray-400 hover:border-blue-400"
                }
                ${
                  gameStarted
                    ? "cursor-not-allowed opacity-50"
                    : "hover:scale-102 hover:shadow-md"
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
            className={`
          w-full px-6 py-4 rounded-xl text-white text-lg font-bold bg-green-500
          hover:bg-green-600 transition-all duration-200 hover:scale-105 hover:shadow-lg
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          `}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridSelector;
