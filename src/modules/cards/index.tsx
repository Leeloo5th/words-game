import { useState } from "react";

import "./styles.css";

export const Card = ({ title = "", ...p }) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
          style={{ ...styles(!isFlipped), backgroundColor: "red" }}
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
