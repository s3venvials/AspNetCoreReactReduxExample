import * as actions from "./actionTypes";
import fetch from "node-fetch";

export const getWeatherForecast = () => async (dispatch) => {
  const res = await (
    await fetch("https://localhost:5001/api/weatherforecast")
  ).json();

  dispatch({ type: actions.GET_WEATHERFORECAST, payload: res });
};

export const getEmployees = () => async (dispatch) => {
  const res = await (await fetch("https://localhost:5001/api/employee")).json();

  dispatch({ type: actions.GET_EMPLOYEES, payload: res });
};
