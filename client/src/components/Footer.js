import moment from "moment";

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <h6>
            &#169; Demo App {moment(Date.now()).format("YYYY")} All Rights
            Reserved
          </h6>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
