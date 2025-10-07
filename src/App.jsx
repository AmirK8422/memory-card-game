import GameBoard from "./GameBoard";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <>
      <ThemeProvider>
        <GameBoard />
        <br />
        <ThemeToggle />
        <br />
      </ThemeProvider>
    </>
  );
}

export default App;
