import * as types from "./index";

export const getAsyncData = () => {
  return {
    type: "GET_ASYNC_DATA",
  };
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const logoutAction = () => {
  return {
    type: types.LOG_OUT,
  };
};

export const todoAction = (val) => {
  return {
    type: types.TODO,
    val
  };
}
