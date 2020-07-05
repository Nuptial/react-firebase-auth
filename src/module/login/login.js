import React, { useState } from "react";
import './login.css';

import { withFirebase } from '../../components/Firebase/context';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    props.firebase
      .signIn(email, password)
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        setError(error);
      });

    event.preventDefault();
  };

  return (
    <div className="login-form">
      <img className="login-logo" src="/hedwig-icon.png" alt="logo"/>
      <span className="sign-in-text">Please sign in</span>
      <input
        name="email"
        value={email}
        onChange={(e) => onChange(e, setEmail)}
        type="text"
        placeholder="Email"
      />
      <input
        name="password"
        value={password}
        onChange={(e) => onChange(e, setPassword)}
        type="password"
        placeholder="Password"
      />
      <button
        className="login-button"
        onClick={onSubmit}
        disabled={email === "" || password === ""}
      >
        Sign In
      </button>

      {error && <p className="error-message">{error.message}</p>}

      <span className="copyright">Hedwig © 2020</span>
    </div>
  );
};

export default withFirebase(Login);
