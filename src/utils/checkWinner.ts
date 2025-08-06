import type { Player } from "../context/gameReducer";

export function checkWinner(
  board: Player[],
  lines: number[][]
): { winner: Player; combo: number[] } | null {
  for (const line of lines) {
    const first = board[line[0]];
    if (first && line.every((i) => board[i] === first)) {
      return { winner: first, combo: line };
    }
  }

  return null;
}
