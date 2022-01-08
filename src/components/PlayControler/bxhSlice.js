const { createSlice } = require("@reduxjs/toolkit");

// 1. Setup todo slice
// todoSlice.js
const bxhSlice = createSlice({
  name: "bxhState",
  initialState: 0,
  reducers: {
    setSongRedux(state, action) {
      console.log("set state redux", action.payload.song);
      return (state = action.payload.song);
    },
  },
});
const { actions, reducer } = bxhSlice;
export const { setSongRedux } = actions;
export default reducer;
