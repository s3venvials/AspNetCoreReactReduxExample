import * as actions from "../actions/actionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.POST_USER_REGISTRATION_ACTION:
      return state = action.payload;

    case actions.POST_USER_LOGIN_ACTION:
      return state = action.payload;

    default:
      return state;
  }
};

export default userReducer;
