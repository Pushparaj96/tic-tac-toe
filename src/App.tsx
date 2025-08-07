import GameScreen from "./components/GameScreen";
import GridSelector from "./components/GridSelector";
import Header from "./components/Header";
import { useGame } from "./context/GameContext";
import { useWinnerChecker } from "./hooks/useWinnerChecker";

function App() {
  const { state } = useGame();
  useWinnerChecker();

  return (
    <div className="bg-bgColor text-textColor min-h-screen">
      <Header />
      {!state.gameStarted ? <GridSelector /> : <GameScreen />}
    </div>
  );
}

export default App;
