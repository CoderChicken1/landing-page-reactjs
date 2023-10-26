import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const rememberMeSaved = localStorage.getItem("rememberMe");
    if (rememberMeSaved === "true") {
      const expiredInRemember = localStorage.getItem("expiredInRemember");
      if (expiredInRemember) {
        checkRememberMe(expiredInRemember);
      }
    } else {

      localStorage.removeItem("token");
    }

    if (
      localStorage.getItem("token") != "" &&
      localStorage.getItem("token") != null
    ) {
      navigate("/dashboard");
    }
    console.log(localStorage.getItem("token"));
  }, []);

  const loginAction = (e) => {
    setValidationErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      email: email,
      password: password,
    };
    axios
      .post("/api/login", payload)
      .then((r) => {
        setIsSubmitting(false);
        localStorage.setItem("token", r.data.token);
        navigate("/dashboard");
      })
      .catch((e) => {
        setIsSubmitting(false);
        if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
        }
        if (e.response.data.error != undefined) {
          setValidationErrors(e.response.data.error);
        }
      });

    localStorage.setItem("rememberMe", rememberMe);
    if (rememberMe) {
      const today = new Date();
      today.setDate(today.getDate() + 30);

      localStorage.setItem("expiredInRemember", today);
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("expiredInRemember");
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
    console.log("ticked", rememberMe);
  };

  const checkRememberMe = (expiredInRemember) => {
    const currrentDate = new Date();
    const expiredDate = new Date(expiredInRemember);

    // Check today > addition after 30 days
    if (currrentDate > expiredDate) {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
      localStorage.removeItem("expiredDate");
    } else {
      const rememberedEmail = localStorage.getItem("rememberedEmail");
      const rememberedPassword = localStorage.getItem("rememberedPassword");
      if (rememberedEmail && rememberedPassword) {
        setEmail(rememberedEmail);
        setPassword(rememberedPassword);
        setRememberMe(true);
      }
    }
  };

  return (
    <div className="login__container">
      <div className="title">
        <span>Login Form</span>
      </div>
      <form
        onSubmit={(e) => {
          loginAction(e);
        }}
      >
        {Object.keys(validationErrors).length != 0 && (
          <p className="text__center ">
            <small className="text__blue">Incorrect Email or Password</small>
          </p>
        )}
        <div className="row">
          <p>Enter your Email</p>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <p>Enter your password</p>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="row button">
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn__blue "
          >
            Login
          </button>
        </div>
        <div className="signup-link">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Remember Me <Link to="/register">Register here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
