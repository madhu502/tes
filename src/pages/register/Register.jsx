import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserApi } from "../../apis/Api";
import "./Register.css";
import logo from "./logo.png";

const Register = () => {
  // Make a useState for 5 fields
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UseState for error messages
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Make functions for each changing the values

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  //validation
  var validate = () => {
    var isValid = true;

    // validate the first name
    if (firstname.trim() === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }

    // validate the last name
    if (lastname.trim() === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }

    // validate the Phone number
    if (phone.trim() === "") {
      setPhoneError("Phone Number is required");
      isValid = false;
    }

    // validate the email
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }

    // validate the password
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    // validate the confirm password
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    }
    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and confirm password doesnot match");
      isValid = false;
    }
    return isValid;
  };

  //Submit button function
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    var isValidated = validate();
    if (!isValidated) {
      return;
    }

    //Making json object
    const data = {
      firstName: firstname,
      lastName: lastname,
      phone: phone,
      email: email,
      password: password,
    };

    registerUserApi(data).then((res) => {
      // Received Data: success, message

      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };
  return (
    <>
      <div>
        <div className="signup-container">
          <div className="signup-form">
            <img src={logo} alt="Logo" className="signup-logo" />
            <h2 className="signup-title">Sign UP</h2>
            <form>
              <input
                onChange={handleFirstname}
                type="text"
                placeholder="Enter your first name"
                className="signup-input"
              />
              {firstNameError && (
                <p className="text-danger">{firstNameError}</p>
              )}
              <input
                onChange={handleLastname}
                type="text"
                placeholder="Enter your last name"
                className="signup-input"
              />
              {lastNameError && <p className="text-danger">{lastNameError}</p>}
              <input
                onChange={handlePhone}
                type="text"
                placeholder="Enter your phone number"
                className="signup-input"
              />
              {phoneError && <p className="text-danger">{phoneError}</p>}
              <input
                onChange={handleEmail}
                type="email"
                placeholder="Enter your email"
                className="signup-input"
              />
              {emailError && <p className="text-danger">{emailError}</p>}
              <input
                onChange={handlePassword}
                type="password"
                placeholder="Enter your Password"
                className="signup-input"
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}

              <input
                onChange={handleConfirmPassword}
                type="password"
                placeholder="Confirm Password"
                className="signup-input"
              />
              {confirmPasswordError && (
                <p className="text-danger">{confirmPasswordError}</p>
              )}

              <button onClick={handleSubmit} className="signup-button">
                Sign up
              </button>
            </form>
            <div className="signin-link">
              Already have an account?{" "}
              <Link to={"/login"}>
                <a href="#">Sign In</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
