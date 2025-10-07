import GameBoard from "./GameBoard";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <>
      <ThemeProvider>
        <GameBoard />

        <ThemeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;
