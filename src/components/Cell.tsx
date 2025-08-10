import { useGame } from "../context/GameContext";
import type { Player } from "../context/gameReducer";

type CellProps = {
  index: number;
  value: Player;
};

export default function Cell({ index, value }: CellProps) {
  const { state, dispatch, playSound } = useGame();
  const { winner, winningCombo, currentPlayer } = state;

  const isDisabled = value !== null || winner !== null;
  const isWinningCell = winningCombo?.includes(index);

  const handleMove = () => {
    if (isDisabled) return;
    playSound(currentPlayer === "X" ? "X" : "O");
    dispatch({ type: "MAKE_MOVE", payload: index });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMove();
    }
  };

  const playerColor =
    value === "X"
      ? "text-playerX"
      : value === "O"
      ? "text-playerO"
      : "text-transparent";

  return (
    <button
      onClick={handleMove}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      aria-label={`Cell ${index + 1}`}
      className={`aspect-square text-3xl font-bold border rounded-md 
      flex items-center justify-center border-gray-400
      bg-white dark:bg-gray-800 focus:outline-none focus:ring-2
      focus:ring-blue-500
      ${playerColor}
      ${
        isWinningCell
          ? "border-4 border-winGlow"
          : isDisabled
          ? "cursor-not-allowed opacity-90"
          : "hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
    >
      {value}
    </button>
  );
}
