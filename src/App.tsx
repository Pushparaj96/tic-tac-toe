import GameScreen from "./components/GameScreen";
import GridSelector from "./components/GridSelector";
import ThemeToggle from "./components/Theme/ThemeToggle";
import { useGame } from "./context/GameContext";
import { useWinnerChecker } from "./hooks/useWinnerChecker";

function App() {
  const { state } = useGame();
  useWinnerChecker();

  return (
    <div className="bg-bgColor text-textColor min-h-screen">
      <h2>Tic Tac Toe app</h2>
      <ThemeToggle />
      {!state.gameStarted ? <GridSelector /> : <GameScreen />}
    </div>
  );
}

export default App;
