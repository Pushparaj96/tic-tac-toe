import { getWinningLines } from "../utils/getWinningLines";
import { generateBoard } from "../utils/generateBoard";

export type Player = "X" | "O" | null;

export type GameState = {
  board: Player[];
  currentPlayer: "X" | "O";
  winner: Player | "draw" | null;
  gridSize: 3 | 4;
  gameStarted: boolean;
  winningCombo: number[] | null;
  winningLines: number[][];
};

export const initialState: GameState = {
  board: [],
  currentPlayer: "X",
  winner: null,
  gridSize: 3,
  gameStarted: false,
  winningCombo: null,
  winningLines: [],
};

export type GameAction =
  | { type: "SET_GRID_SIZE"; payload: 3 | 4 }
  | { type: "START_GAME" }
  | { type: "MAKE_MOVE"; payload: number }
  | {
      type: "SET_WINNER";
      payload: { winner: Player | "draw"; combo: number[] | null };
    }
  | { type: "RESET_GAME" }
  | { type: "GO_HOME" };

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case "SET_GRID_SIZE": {
      const size = action.payload;
      return {
        ...state,
        gridSize: size,
      };
    }

    case "START_GAME":
      return {
        ...state,
        gameStarted: true,
        board: generateBoard(state.gridSize),
        winningLines: getWinningLines(state.gridSize),
        winner: null,
        currentPlayer: "X",
        winningCombo: null,
      };
    case "MAKE_MOVE": {
      if (state.board[action.payload] || state.winner) return state;
      const newBoard = [...state.board];
      newBoard[action.payload] = state.currentPlayer;
      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      };
    }
    case "SET_WINNER":
      return {
        ...state,
        winner: action.payload.winner,
        winningCombo: action.payload.combo,
      };
    case "RESET_GAME":
      return {
        ...initialState,
        winningLines: state.winningLines,
        gridSize: state.gridSize,
        board: generateBoard(state.gridSize),
        gameStarted: true,
      };
    case "GO_HOME":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
