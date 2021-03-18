import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Alert from "./Alert";

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
  const [alertMessage, setAlert] = useState("");

  useEffect(() => {
    if (props.location.state) setAlert(props.location.state.message);
  }, [props.location.state]);

  return (
    <div className="container">
      {alertMessage && <Alert type="alert-success" message={alertMessage} /> }

      <h5 style={styles.content}>
        Example app using ASP.NET Core, Entity Framework, SQLLite, Identity Server 4, React, Redux, and Bootstrap 5
      </h5>

      <LoginForm />
    </div>
  );
};

export default HomePage;
