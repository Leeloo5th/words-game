import "./styles.css";

export const Card = ({ title = "", ...p }) => {
  return (
    <section className="card" {...p}>
      <h1>{title}</h1>
    </section>
  );
};
