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
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="w-10"></div>
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Tic Tac Toe Clash
        </h1>
        <ThemeToggle />
      </header>
      {!state.gameStarted ? <GridSelector /> : <GameScreen />}
    </div>
  );
}

export default App;
