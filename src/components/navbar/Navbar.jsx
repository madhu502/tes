import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo1.png";

const Navbar = () => {
  // Get user data from local storage
  const users = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <div className="logo ">
            <a>
              <img src={logo} alt="Lakshya Logo" className="logo-icon" />
            </a>
          </div>
          <div className="logo-text ">
            <a>
              <span className="logo-text text-white">LAKSHYA</span>
            </a>
          </div>
          <div className="search-container ">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            class="nav-links collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/subjects">
                  Subject
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/premium">
                  Premium
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search Courses"
                className="search-input"
              />
              <button className="search-button">
                <span role="img" aria-label="search">
                  🔍
                </span>
              </button>
            </div>
            <form className="d-flex" role="search">
              {users ? (
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {users.firstName}!
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link
                    to="/register"
                    className="btn btn-secondary ms-2"
                    type="submit"
                  >
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-primary" type="submit">
                    Log In
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
