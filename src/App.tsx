import Board from "./components/Board";
import GridSelector from "./components/GridSelector";
import ThemeToggle from "./components/Theme/ThemeToggle";
import { useGame } from "./context/GameContext";

function App() {
  const { state } = useGame();

  return (
    <div className="bg-bgColor text-textColor min-h-screen">
      <h2>Tic Tac Toe app</h2>
      <ThemeToggle />
      {!state.gameStarted ? (
        <GridSelector />
      ) : (
        <>
          <Board />
        </>
      )}
    </div>
  );
}

export default App;
