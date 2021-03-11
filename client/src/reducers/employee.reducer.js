import * as actions from "../actions/actionTypes";

const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_EMPLOYEES_ACTION:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default employeeReducer;
