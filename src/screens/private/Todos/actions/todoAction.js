import * as types from "./index";


export const todoAction = (val) => {
    return {
      type: types.TODO,
      val
    };
  }