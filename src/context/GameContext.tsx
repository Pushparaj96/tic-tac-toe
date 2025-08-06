import { createContext, useContext, useReducer, useEffect } from "react";
import { gameReducer, initialState } from "./gameReducer";
import type { GameAction, GameState } from "./gameReducer";

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState, () => {
    const local = localStorage.getItem("tic-tac-toe");
    return local ? JSON.parse(local) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("tic-tac-toe", JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
