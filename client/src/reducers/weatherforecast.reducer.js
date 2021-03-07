import * as actions from "../actions/actionTypes";

const weatherForecastReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_WEATHERFORECAST:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default weatherForecastReducer;
