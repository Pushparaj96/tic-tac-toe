import type { Player } from "../context/gameReducer";

export const generateBoard = (size: number): Player[] => {
  return Array(size * size).fill(null);
};
