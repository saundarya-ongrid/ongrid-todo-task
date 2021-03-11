import * as types from "../actions";

const initialState = {
  isAuth: false,
};

const loginReducer = (state = initialState, action) => {
  // console.log('actions', action.type)
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true };
    case types.LOGIN_USER_ERROR:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
export { loginReducer };
