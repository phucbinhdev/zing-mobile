import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../components/PlayControler/bxhSlice";
import playingSongReducer from "../components/PlayControler/playSongSlice";
const store = configureStore({
  reducer: {
    songList: songReducer,
    playingSong: playingSongReducer,
  },
});

export default store;
