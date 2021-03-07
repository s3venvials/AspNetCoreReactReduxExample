const styles = {
  title: {
    textAlign: "center",
  },
};

const Home = () => {
  return (
    <div className="container">
      <h1 style={styles.title}>Home Page</h1>
      <hr />
      <h5>
        Example app using ASP.NET Core, Entity Framework with SQLLite, and React
        Redux
      </h5>
    </div>
  );
};

export default Home;
