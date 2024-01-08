import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import "./style.css";
const MyLogin = ({ theme }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e) => {
    let btn = document.querySelector("#submit");

    e.preventDefault();
    btn.innerHTML = '<div class="loader"></div>';
    // will call authProvider.login({ email, password })
    login({ username, password }).catch(() => {
      notify("Invalid username or password");
      btn.innerHTML = "Login";
    });
  };

  return (
    <div className="container">
      <div className="left">
        <div className="login-section">
          <header>
            <h2 className="animation a1">ATNER Compta</h2>
            <h4 className="animation a2">Votre comptabilité simplifiée</h4>
          </header>
          <form>
            <input
              type="text"
              placeholder="Username"
              required
              className="input-field animation a3"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="input-field animation a4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="animation a5"></p>
            <button
              className="animation a6"
              type="submit"
              onClick={handleSubmit}
              id="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default MyLogin;
