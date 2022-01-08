import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../components/PlayControler/bxhSlice";
const store = configureStore({
  reducer: {
    songList: songReducer,
  },
});

export default store;
