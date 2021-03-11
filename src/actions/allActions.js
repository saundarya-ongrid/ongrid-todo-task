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


