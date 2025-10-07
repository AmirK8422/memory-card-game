import { useEffect, useState } from "react";
import batMan from "./assets/gamePics/batMan.png";
import clayFace from "./assets/gamePics/clayFace.png";
import harleyQuin from "./assets/gamePics/harleyQueen.png";
import nightWing from "./assets/gamePics/nightWing.png";
import redHood from "./assets/gamePics/redHood.png";
import roBin from "./assets/gamePics/roBin.png";
import theJoker from "./assets/gamePics/theJoker.png";
import theRiddler from "./assets/gamePics/theRiddler.png";

import reset from "./assets/gamePics/resetBtn.png";

const cardImages = [
  {
    Esm: "clayFace",
    image: clayFace,
    matched: false,
  },
  {
    Esm: "harleyQuin",
    image: harleyQuin,
    matched: false,
  },
  {
    Esm: "nightWing",
    image: nightWing,
    matched: false,
  },
  {
    Esm: "redHood",
    image: redHood,
    matched: false,
  },
  {
    Esm: "roBin",
    image: roBin,
    matched: false,
  },
  {
    Esm: "theJoker",
    image: theJoker,
    matched: false,
  },
  {
    Esm: "theRiddler",
    image: theRiddler,
    matched: false,
  },
  {
    Esm: "batMan",
    image: batMan,
    matched: false,
  },
];

import "./GameBoard.css";
import EachCard from "./EachCard";

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState(false);

  function shuffle() {
    const shuffle = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffle);
    setMoves(0);
  }

  function checkChoices(card) {
    cardOne ? setCardTwo(card) : setCardOne(card);
  }
  useEffect(() => {
    if (cardOne && cardTwo) {
      setDisabled(true);
      if (cardOne.Esm === cardTwo.Esm) {
        setCards((cardGhabli) => {
          return cardGhabli.map((card) => {
            if (card.Esm === cardOne.Esm) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        moveCounter();
        setWin((preWinner) => preWinner + 1);
      } else {
        setTimeout(() => {
          moveCounter();
        }, [1000]);
      }
    }
  }, [cardOne, cardTwo]);

  const moveCounter = () => {
    setCardOne(null);
    setCardTwo(null);
    setMoves((turnGhabl) => turnGhabl + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffle();
    setCardOne(null);
    setCardTwo(null);
  }, []);

  return (
    <>
      <div className="winner dark-mode">
        <h1>memory game</h1>
        {win === 8 ? <h1>🎉You Won🎉</h1> : <h1>moves: {moves}</h1>}
        <div className="buyyon">
          <button className="restartBtn" onClick={shuffle}>
            <img src={reset} alt="reset" />
          </button>
        </div>
      </div>
      <div className="kol">
        <div className="card-container">
          {cards.map((card) => (
            <EachCard
              key={card.id}
              card={card}
              checkChoices={checkChoices}
              flipped={card === cardOne || card === cardTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
