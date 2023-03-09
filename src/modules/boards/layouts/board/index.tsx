import "./styles.css";

import { Card } from "../../../cards";
import { shuffle } from "../../../../shared/utils/shuffle";
import dictionary from "../../../../data/dictionary.json";

const words = shuffle(dictionary);

export const Board = () => {
  return (
    <section className="board">
      {words.slice(0, 25).map((word, i) => (
        <Card title={word} key={i} />
      ))}
    </section>
  );
};
