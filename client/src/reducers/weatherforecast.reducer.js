import * as actions from "../actions/actionTypes";

const weatherForecastReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_WEATHERFORECAST_ACTION:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default weatherForecastReducer;
