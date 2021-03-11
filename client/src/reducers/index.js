import { combineReducers } from "redux";
import weatherForecastReducer from "./weatherforecast.reducer";
import employeeReducer from "./employee.reducer";

export default combineReducers({
  getWeather: weatherForecastReducer,
  getEmployees: employeeReducer,
});
