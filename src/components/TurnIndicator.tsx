import { useGame } from "../context/GameContext";

const TurnIndicator = () => {
  const { state } = useGame();
  const { currentPlayer, winner, gameStarted } = state;

  if (!gameStarted || winner) return null;
  return (
    <div className="text-center mb-4">
      <span
        className={`text-xl md:text-2xl font-bold px-1 ${
          currentPlayer === "X" ? "text-playerX" : "text-playerO"
        }`}
      >
        "Player {currentPlayer} Turn"
      </span>
    </div>
  );
};

export default TurnIndicator;
