import { useState } from "react";

// Styles
import styles from "../login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Submit</button>
    </form>
  );
};

export default Login;
