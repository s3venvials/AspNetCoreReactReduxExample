import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const styles = {
  nav: {
    marginBottom: "2em",
  },
};

const Navigation = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (props.loginUser.length){
      setTimeout(() => {
        setUser(props.loginUser[0].firstName);
      }, 700);
    }
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={styles.nav}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Demo App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/weather">
                Weather Forecast
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/employees">
                Employees
              </a>
            </li>
          </ul>

          {user && `Hello ${user}!`}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { loginUser: state.loginUser };
};

export default connect(mapStateToProps, null)(Navigation);
