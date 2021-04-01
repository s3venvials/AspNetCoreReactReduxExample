import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Alert from "./Alert";
import { connect } from "react-redux";

const styles = {
  title: {
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    border: "1px solid #EEE",
    borderRadius: "15px",
    maxWidth: 400,
    padding: "1em",
    margin: "1em auto",
    backgroundColor: "#EEE",
    boxShadow: "5px 7px #888888"
  }
};

const HomePage = (props) => {
  console.log(props);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    if (props.registerUser) {
      setMessage("");
      props.registerUser.status !== 202 ? setAlertType("danger") : setAlertType("success");
      setMessage(props.registerUser.message);
    };

    if (props.loginUser) {
      setMessage("");
      props.loginUser.status !== 202 ? setAlertType("danger") : setAlertType("success");
      setMessage(props.loginUser.message);
    };
  }, [props.registerUser, props.loginUser]);

  return (
    <div className="container">
      {message && <Alert type={`alert-${alertType}`} message={message} /> }

      <h5 style={styles.content}>
        Example app using ASP.NET Core, Entity Framework, SQLLite, Identity Server 4, React, Redux, and Bootstrap 5
      </h5>

      <LoginForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { registerUser: state.registerUser, loginUser: state.loginUser };
};

export default connect(mapStateToProps, null)(HomePage);
