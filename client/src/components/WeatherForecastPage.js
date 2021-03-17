import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchWeatherForecast } from "../actions";
import moment from "moment";
import Loader from "./Loader";

const styles = {
  title: {
    textAlign: "center",
    marginBottom: "1em",
  },
};

const WeatherForecastPage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.fetchWeatherForecast();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let temp = [...data];

    if (temp.length) {
      setData([...temp]);
      return;
    }

    setData([...props.getWeather]);
    // eslint-disable-next-line
  }, [props.getWeather]);

  return (
    <div className="container">
      <h1 style={styles.title}>Weather Forecast</h1>
      {data.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature C</th>
              <th>Temperature F</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{moment(item.date).format("LLL")}</td>
                  <td>{item.temperatureC}</td>
                  <td>{item.temperatureF}</td>
                  <td>{item.summary}</td>
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
  return { getWeather: state.getWeather };
};

export default connect(mapStateToProps, { fetchWeatherForecast })(
  WeatherForecastPage
);
