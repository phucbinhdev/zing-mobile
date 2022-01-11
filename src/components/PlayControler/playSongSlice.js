const { createSlice } = require("@reduxjs/toolkit");

// 1. Setup todo slice
const playSongSlice = createSlice({
  name: "playingSong",
  initialState: "",
  reducers: {
    setPlayingSong(state, action) {
      console.log("Đang phát id", action.payload);
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = playSongSlice;
export const { setPlayingSong } = actions;
export default reducer;
