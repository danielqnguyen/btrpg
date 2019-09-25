export function getCharData(data) {
  console.log("====================");

  return {
    type: "SAVE_CHAR_DATA",
    payload: data
  };
}
