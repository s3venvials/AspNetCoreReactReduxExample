import { Route, Router } from "react-router-dom";
import WeatherForecast from "./WeatherForecast";
import Home from "./Home";
import Employees from "./Employees";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { history } from "../helpers";

function App() {
  return (
    <Router history={history}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={WeatherForecast} />
      <Route path="/employees" component={Employees} />
      <Footer />
    </Router>
  );
}

export default App;
