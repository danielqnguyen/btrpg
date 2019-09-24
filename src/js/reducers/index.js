const Reducer = (
  state = {
    charLvl: ""
  },
  action
) => {
  switch (action.type) {
    case "SAVE_CHAR_DATA":
      state = {
        ...state,
        charLvl: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default Reducer;
