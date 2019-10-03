const Reducer = (
  state = {
    charLvl: ""
  },
  action
) => {
  switch (action.type) {
    case "SAVE_CHAR_DATA":
      // console.log(action.payload.stats.level, "++++++++++++");
      const charStats = action.payload;
      console.log(action);
      // state = {
      //   job: charStats.job,
      //   charLvl: charStats.stats.level,
      //   str: charStats.stats.str,
      //   agi: charStats.stats.agi,
      //   luk: charStats.stats.luk,
      //   hp: charStats.stats.hp,
      //   def: charStats.stats.def,
      //   exp: 0
      // };
      break;
    default:
      break;
  }
  return state;
};

export default Reducer;
