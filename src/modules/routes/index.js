import { Routes, Route, Link } from "react-router-dom";

import App from "../../App";
import { SignIn } from "../users/layouts/SignIn";
import { SignUp } from "../users/layouts/SignUp";
import { Board } from "../boards/layouts/board";

function Navigation() {
  return (
    <>
      {/* <Link to='/'>MainPage</Link> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default Navigation;
