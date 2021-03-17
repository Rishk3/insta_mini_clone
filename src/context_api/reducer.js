export const initialState = {
  allPostCount: 20,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ALLPOST":
      return {
        ...state,
        allPostCount: action.allPostCount,
      };

    default:
      return state;
  }
};

export default reducer;
