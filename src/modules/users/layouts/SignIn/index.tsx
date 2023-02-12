import "./styles.css";

export const SignIn = () => {
  return (
    <section className="signIn">
      <h1>Sign in</h1>

      <form>
        <label>Login</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Sign in</button>
      </form>
    </section>
  );
};
