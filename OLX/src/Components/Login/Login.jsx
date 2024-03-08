import React from "react";
import Logo from "../../olx-logo.png";
import "./Login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../../Firebase/config'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password ,auth);
    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/')
            })
            .catch((error) => {
              alert('wrong credentials!!!')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e) => handleLogin(e)}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
