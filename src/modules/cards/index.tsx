import { useState } from "react";
import { shuffle } from "../../shared/utils/shuffle";

import "./styles.css";

export const Card = ({ title = "", index = 0, ...p }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const colors = [
    ...new Array(9).fill("green"),
    ...new Array(8).fill("red"),
    ...new Array(7).fill("white"),
    "black",
  ];

  const shuffledColors = shuffle(colors);

  const handleClick = () => {
    setIsFlipped(true);

    // Future
    // p?.onClick && p.onClick({ ...p, title });
  };

  const styles = (isFlipped: boolean) => ({
    transform: `rotateY(${isFlipped ? "180deg" : "0deg"})`,
    transition: "transform 1s ease-in-out",
  });

  return (
    <section className="flip-card">
      <div className="flip-card-inner">
        <div
          className="card mirror-card"
          {...p}
          style={{
            ...styles(!isFlipped),
            backgroundColor: shuffledColors[index],
          }}
        >
          <h1>{title}</h1>
        </div>

        <div
          className="card"
          {...p}
          style={styles(isFlipped)}
          onClick={handleClick}
        >
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};
