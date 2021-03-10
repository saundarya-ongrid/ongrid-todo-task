const initialState = {
  data: "",
};

const customAsyncData = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SET_DATA":
      newState.data = action.payload;
      return newState;
    default:
      return newState;
  }
};
export { customAsyncData };
