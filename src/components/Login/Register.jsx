import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") != "" &&
      localStorage.getItem("token") != null
    ) {
      navigate("/dashboard");
    }
  }, []);

  const registerAction = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };
    axios
      .post("/api/register", payload)
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
      });
  };
  return (
    <div className="register__container">
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={(e) => registerAction(e)}>
          <div className="input-box">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {validationErrors.name != undefined && (
              <div className="flex flex-col">
                <small className="text__light">
                  {validationErrors.name[0]}
                </small>
              </div>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="email">Email address</label>
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
            {validationErrors.email != undefined && (
              <div className="flex flex-col">
                <small className="text-danger">
                  {validationErrors.email[0]}
                </small>
              </div>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {validationErrors.password != undefined && (
              <div className="flex flex-col">
                <small className="text-danger">
                  {validationErrors.password[0]}
                </small>
              </div>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-box button">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn__blue "
            >
              Register Now
            </button>
          </div>
          <div className="text">
            <p className="text-center">
              Have already an account{" "}
              <Link to="/" className="Link-login">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
