import * as types from "./index";

const getAsyncData = () => {
  return {
    type: "GET_ASYNC_DATA",
  };
};

const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export default { getAsyncData, loginUserAction };
