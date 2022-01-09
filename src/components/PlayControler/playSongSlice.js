const { createSlice } = require("@reduxjs/toolkit");

// 1. Setup todo slice
const playSongSlice = createSlice({
  name: "playingSong",
  initialState: "",
  reducers: {
    setPlayingSong(state, action) {
      console.log("Đang phát id", action.payload.code);
      return (state = action.payload.code);
    },
  },
});
const { actions, reducer } = playSongSlice;
export const { setPlayingSong } = actions;
export default reducer;
