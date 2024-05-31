import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";
import "./Login.css";
import logo from "./logo.png";

const Login = () => {
  // make a usestate for each input

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Make a error state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validation
  const validation = () => {
    let isValid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };
  //Make a function to handle the form submission
  const handleLogin = (e) => {
    e.preventDefault();

    //validation
    if (!validation()) {
      return;
    }

    //make a json object
    const data = {
      email: email,
      password: password,
    };
    //Make a api request
    loginUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        //Setting token and user data in local storage
        localStorage.setItem("token", res.data.token);

        //Setting user data
        const convertedData = JSON.stringify(res.data.userData);

        //local storage set
        localStorage.setItem("users", convertedData);
      }
    });
  };

  return (
    <>
      <div>
        <div className="signin-container">
          <div className="signin-form">
            <img src={logo} alt="Logo" className="signin-logo" />
            <h2 className="signin-title">Sign In</h2>
            <form>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="signin-input"
              />
              {emailError && <p className="text-danger">{emailError}</p>}
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="signin-input"
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <button onClick={handleLogin} className="signin-button">
                Sign in
              </button>
            </form>
            <div className="signin-divider">
              <span>or</span>
            </div>
            <div className="social-login">
              <button className="google-button">G</button>
              <button className="facebook-button">f</button>
              <button className="apple-button"></button>
            </div>
            <div className="signup-link">
              Don't have an account?{" "}
              <Link to={"/register"}>
                <a href="#">Sign Up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
