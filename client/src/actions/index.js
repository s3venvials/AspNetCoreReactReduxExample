import * as actions from "./actionTypes";
import fetch from "node-fetch";

export const fetchWeatherForecast = () => async (dispatch) => {
  const res = await (
    await fetch("http://localhost:5000/api/weatherforecast")
  ).json();

  dispatch({ type: actions.GET_WEATHERFORECAST_ACTION, payload: res });
};

export const fetchEmployees = () => async (dispatch) => {
  const res = await (await fetch("http://localhost:5000/api/employee")).json();

  dispatch({ type: actions.GET_EMPLOYEES_ACTION, payload: res });
};

export const postUserRegistration = (body) => async (dispatch) => {
  const res = await fetch("http://localhost:5000/api/user/register", {
    method: 'POST',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  const result = await res.text() === typeof String ? [{ message: res.text() }] : res.json();

  dispatch({ type: actions.POST_USER_REGISTRATION_ACTION, payload: result });
};

export const postUserLogin = (body) => async (dispatch) => {
  const res = await (await fetch("http://localhost:5000/api/user/login", {
    method: 'POST',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })).json();

  dispatch({ type: actions.POST_USER_LOGIN_ACTION, payload: res });
};
