import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Alert from "./Alert";

const styles = {
  title: {
    textAlign: "center",
  },
};

const HomePage = (props) => {
  const [alertMessage, setAlert] = useState("");

  useEffect(() => {
    if (props.location.state) setAlert(props.location.state.message);
  });

  return (
    <div className="container">
      {alertMessage && <Alert type="alert-success" message={alertMessage} /> }

      <h1 style={styles.title}>Home Page</h1>
      <hr />
      <h5 style={styles.title}>
        Example app using ASP.NET Core, Entity Framework with SQLLite, and React
        Redux
      </h5>

      <LoginForm />
    </div>
  );
};

export default HomePage;
