import "./styles.css";

import { Card } from "../../../cards";

const showCards = () => {
  const cards = [];
  for (let i = 0; i < 25; i++) {
    cards.push(<Card />);
  }
  return cards;
};

export const Board = () => {
  return <section className="board">{showCards()}</section>;
};
