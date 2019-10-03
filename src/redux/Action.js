export function getCharData(data) {
  console.log("====================");
  console.log(data);
  return {
    type: "SAVE_CHAR_DATA",
    // payload: data
    payload: sessionStorage.setItem("char", JSON.stringify(data))
  };
}
