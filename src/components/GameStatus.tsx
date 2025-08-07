import { House, RotateCcw } from "lucide-react";
import { useGame } from "../context/GameContext";
import ConfirmationModal from "./ConfirmationModal";
import { useConfirmationModal } from "../hooks/useConfirmatioModal";
import Tooltip from "./ToolTip";

const GameStatus = () => {
  const { state, dispatch } = useGame();
  const { winner, currentPlayer, gameStarted } = state;
  const { modal, handleConfirm, handleCancel, openModal } =
    useConfirmationModal();

  let message = "";
  let messageColorClass = "text-textColor";

  const handleNewGame = () => {
    openModal({
      title: "Restart Game",
      message: "Are you sure you want to start a new game?",
      confirmText: "Start New Game",
      variant: "warning",
    });
  };

  const handleHomeClick = () => {
    openModal({
      title: "Go to Home",
      message: "Are you sure? The current game will be lost.",
      confirmText: "Go Home",
      variant: "warning",
    });
  };

  const onModalConfirm = () => {
    if (modal.title === "Restart Game") {
      dispatch({ type: "RESTART_GAME" });
    } else if (modal.title === "Go to Home") {
      dispatch({ type: "GO_HOME" });
    }
    handleConfirm();
  };

  // message and color based on game state
  if (winner === "draw") {
    message = "It's a draw 🤝";
    messageColorClass = "text-textColor";
  } else if (winner) {
    message = `Player ${winner} wins 🎉`;
    messageColorClass = winner === "X" ? "text-playerX" : "text-playerO";
  } else if (gameStarted) {
    message = `Player ${currentPlayer}'s turn`;
    messageColorClass = currentPlayer === "X" ? "text-playerX" : "text-playerO";
  }

  return (
    <>
      <div className="w-full">
        {gameStarted && (
          <div className="flex justify-end gap-2 mb-4">
            <Tooltip text="Go Home" position="top">
              <button
                onClick={handleHomeClick}
                className="p-2 bg-homeButton hover:bg-homeButtonHover text-homeButtonText rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110"
              >
                <House size={20} />
              </button>
            </Tooltip>

            <Tooltip text="New Game" position="top">
              <button
                onClick={handleNewGame}
                className="p-2 bg-restartButton hover:bg-restartButtonHover text-restartButtonText rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110"
              >
                <RotateCcw size={20} />
              </button>
            </Tooltip>
          </div>
        )}

        {/* Game Status Message*/}
        <div className="text-center">
          <p
            className={`text-xl md:text-2xl font-semibold ${messageColorClass}`}
          >
            {message}
          </p>
        </div>
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
