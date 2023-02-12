import "./styles.css";

export const SignUp = () => {
  return (
    <section className="signUp">
      <h1>Sign up</h1>

      <form>
        <label>Login</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <label>Confirm password</label>
        <input type="password" />
        <label>First name</label>
        <input type="text" />
        <label>Last name</label>
        <input type="text" />

        <button type="submit">Sign up</button>
      </form>
    </section>
  );
};
