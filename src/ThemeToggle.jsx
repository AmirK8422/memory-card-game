import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import nightwing from "./assets/nightwingLogo.png";
import robin from "./assets/robinLogo.png";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="thema">
        <label htmlFor="button">change theme:</label>
        <button onClick={toggleDarkMode} className="THEMEmode">
          {darkMode ? <img src={robin}></img> : <img src={nightwing}></img>}
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
