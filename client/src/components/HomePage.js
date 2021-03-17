import React, { useEffect } from "react";
import LoginForm from "./LoginForm";

const styles = {
  title: {
    textAlign: "center",
  },
};

const HomePage = (props) => {
  useEffect(() => {
    if (props.location.state) alert(props.location.state.message);
  });

  return (
    <div className="container">
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
