import * as types from "../actions";

const initialState = {
  todoData:[]
};

const todoReducer = (state = initialState, action) => {
  // console.log('actions todo', action.response)
  switch (action.type) {
    case types.TODO_SUCCESS:
      return { ...state, todoData: action.response };
    case types.TODO_ERROR:
      return { ...state};

    default:
      return state;
  }
};
export { todoReducer };
