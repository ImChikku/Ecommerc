import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile,setPhone] = useState("");
  const [username,setUserName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/register", { email, password,username,mobile })
      .then((res) => {
        if (res.status === 201) navigate("./login");
      })
      .catch((err) => alert("something went wrong try after sometime"));
  };
  return (
    <div className="login">
      <div>
        <img src="images/banner-bg.svg"/>
      </div>
      <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            placeholder="Enter your name"
          />
          <label>Phone NO</label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={mobile}
            placeholder="Enter your Phone number"
          />
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="sample@email.com"
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
          <button className="btn nav-reg">Register</button>
        </form>
      </div>
    </div>
  );
};
