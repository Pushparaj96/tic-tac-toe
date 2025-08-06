import { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { checkWinner } from "../utils/checkWinner";
import confetti from "canvas-confetti";

export function useWinnerChecker() {
  const { state, dispatch } = useGame();
  const { board, winner, winningLines } = state;

  useEffect(() => {
    if (winner || board.length === 0) return;

    const result = checkWinner(board, winningLines);

    if (result) {
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        dispatch({
          type: "SET_WINNER",
          payload: {
            winner: result.winner,
            combo: result.combo,
          },
        });
      }, 200);
    } else if (board.every((cell) => cell !== null)) {
      setTimeout(() => {
        dispatch({
          type: "SET_WINNER",
          payload: { winner: "draw", combo: null },
        });
      }, 200);
    }
  }, [board, winner, winningLines, dispatch]);
}
