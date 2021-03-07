const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <h5>Loading...</h5>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
