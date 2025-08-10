import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useRef,
} from "react";
import { gameReducer, initialState } from "./gameReducer";
import type { GameAction, GameState } from "./gameReducer";

// Game sound files
import soundX from "../assets/sounds/moveX.mp3";
import soundO from "../assets/sounds/moveO.mp3";
import soundWin from "../assets/sounds/win.mp3";
import soundDraw from "../assets/sounds/draw2.mp3";

type SoundName = "X" | "O" | "win" | "draw";

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  isMuted: Boolean;
  toggleMute: () => void;
  playSound: (name: SoundName) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState, () => {
    const local = localStorage.getItem("tic-tac-toe");
    return local ? JSON.parse(local) : initialState;
  });

  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("tic-tac-toe-muted") === "true";
  });

  // Preload audio
  const audioMap = useRef<Record<SoundName, HTMLAudioElement>>({
    X: new Audio(soundX),
    O: new Audio(soundO),
    win: new Audio(soundWin),
    draw: new Audio(soundDraw),
  });

  const playSound = (name: SoundName) => {
    if (isMuted) return;
    const audio = audioMap.current[name];
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      localStorage.setItem("tic-tac-toe-muted", String(!prev));
      return !prev;
    });
  };

  useEffect(() => {
    localStorage.setItem("tic-tac-toe", JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider
      value={{ state, dispatch, isMuted, toggleMute, playSound }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
