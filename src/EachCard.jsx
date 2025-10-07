import batmanLogo from "./assets/gamePics/batmanLogo.png";
import "./GameBoard.css";

const EachCard = ({ card, checkChoices, flipped, disabled }) => {
  function handleChoice() {
    if(!disabled)
    {
      checkChoices(card)

    }
  }

  return (
    <>
      <div className="card dark-mode">
        <div className={flipped ? "flipped" : ""}>
          <img src={card.image} alt={card.Esm} className="jolou" />
          <img
            src={batmanLogo}
            alt="posht card"
            className="posht"
            onClick={handleChoice}
          />
        </div>
      </div>
    </>
  );
};

export default EachCard;
