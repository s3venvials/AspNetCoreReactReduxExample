import * as actions from "./actionTypes";
import fetch from "node-fetch";

export const fetchWeatherForecast = () => async (dispatch) => {
  const res = await (
    await fetch("https://localhost:5001/api/weatherforecast")
  ).json();

  dispatch({ type: actions.GET_WEATHERFORECAST_ACTION, payload: res });
};

export const fetchEmployees = () => async (dispatch) => {
  const res = await (await fetch("https://localhost:5001/api/employee")).json();

  dispatch({ type: actions.GET_EMPLOYEES_ACTION, payload: res });
};

export const postUserRegistration = (body) => async (dispatch) => {
  const res = await (await fetch("https://localhost:5001/api/user/register", {
    method: 'POST',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })).json();

  console.log(res);

  dispatch({ type: actions.POST_USER_REGISTRATION_ACTION, payload: res });
};
