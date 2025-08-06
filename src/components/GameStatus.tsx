import { HomeIcon, Recycle } from "lucide-react";
import { useGame } from "../context/GameContext";
import ConfirmationModal from "./ConfirmationModal";
import { useConfirmationModal } from "../hooks/useConfirmatioModal";

const GameStatus = () => {
  const { state, dispatch } = useGame();
  const { winner, currentPlayer, gameStarted } = state;
  const { modal, handleConfirm, handleCancel, openModal } =
    useConfirmationModal();

  let message = "";
  let messageColorClass = "text-textColor"; // default color

  const handleNewGame = () => {
    openModal({
      title: "Restart Game",
      message:
        "Are you sure you want to start a new game? Current progress will be lost.",
      confirmText: "Start New Game",
      variant: "warning",
    });
  };

  const handleHomeClick = () => {
    openModal({
      title: "Go to Home",
      message: "Are you sure? The current game will be reset.",
      confirmText: "Go Home",
      variant: "warning",
    });
  };

  const onModalConfirm = () => {
    // Check which action was requested based on modal title
    if (modal.title === "Restart Game") {
      dispatch({ type: "RESET_GAME" });
    } else if (modal.title === "Go to Home") {
      dispatch({ type: "GO_HOME" });
    }
    handleConfirm();
  };

  // Set message and color based on game state
  if (winner === "draw") {
    message = "It's a draw 🤝";
    messageColorClass = "text-textColor"; // neutral color for draw
  } else if (winner) {
    message = `Player ${winner} wins 🎉`;
    messageColorClass = winner === "X" ? "text-playerX" : "text-playerO";
  } else if (gameStarted) {
    message = `Player ${currentPlayer}'s turn`;
    messageColorClass = currentPlayer === "X" ? "text-playerX" : "text-playerO";
  }

  return (
    <>
      <div className="flex flex-col items-center gap-3 text-center my-4">
        <p className={`text-xl md:text-2xl font-semibold ${messageColorClass}`}>
          {message}
        </p>
        {gameStarted && (
          <div className="flex gap-4">
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-2 px-4 py-2 bg-homeButton hover:bg-homeButtonHover text-homeButtonText rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <HomeIcon size={18} />
              Home
            </button>

            <button
              onClick={handleNewGame}
              className="flex items-center gap-2 px-4 py-2 bg-restartButton hover:bg-restartButtonHover text-restartButtonText rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <Recycle size={18} />
              Restart
            </button>
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        confirmText={modal.confirmText}
        cancelText={modal.cancelText}
        variant={modal.variant}
        onConfirm={onModalConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default GameStatus;
