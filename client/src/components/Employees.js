import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions";
import moment from "moment";
import Loader from "./Loader";

const styles = {
  title: {
    textAlign: "center",
    marginBottom: "1em",
  },
};

const Employees = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.fetchEmployees();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let temp = [...data];

    if (temp.length) {
      setData([...temp]);
      return;
    }

    setData([...props.getEmployees]);
    // eslint-disable-next-line
  }, [props.getEmployees]);

  return (
    <div className="container">
      <h1 style={styles.title}>Employees</h1>
      {data.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{moment(item.startdate).format("LLL")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { getEmployees: state.getEmployees };
};

export default connect(mapStateToProps, { fetchEmployees })(Employees);
