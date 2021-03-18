import { combineReducers } from "redux";
import weatherForecastReducer from "./weatherforecast.reducer";
import employeeReducer from "./employee.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  getWeather: weatherForecastReducer,
  getEmployees: employeeReducer,
  registerUser: userReducer,
  loginUser: userReducer
});
