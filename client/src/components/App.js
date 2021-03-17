import { Route, Router } from "react-router-dom";
import WeatherForecastPage from "./WeatherForecastPage";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import EmployeesPage from "./EmployeesPage";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { history } from "../helpers";

function App() {
  return (
    <Router history={history}>
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/weather" component={WeatherForecastPage} />
      <Route path="/employees" component={EmployeesPage} />
      <Footer />
    </Router>
  );
}

export default App;
