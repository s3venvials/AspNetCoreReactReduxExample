import * as actions from "../actions/actionTypes";

const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_EMPLOYEES:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default employeeReducer;
