import * as types from "../actions";

const initialState = {
  isAuth: false,
  username : ''
};

const loginReducer = (state = initialState, action) => {
  // console.log('actions', action.response.username)
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, username : action.response.username };
    case types.LOGIN_USER_ERROR:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
export { loginReducer };
