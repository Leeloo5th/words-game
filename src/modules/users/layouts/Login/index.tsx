import { Link } from "react-router-dom";
import "./styles.css";

export const Login = () => {
  return (
    <section className="logIn">
      <button>
        <Link to="/signin">Sign in</Link>
      </button>
      <button>
        <Link to="/signup">Sign up</Link>
      </button>
      <button>
        <Link to="/board">Guest</Link>
      </button>
    </section>
  );
};
