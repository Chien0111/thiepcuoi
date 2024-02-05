import { configureStore } from "@reduxjs/toolkit";
import { playSlice } from "./playMusic";

export const store = configureStore({
  reducer: {
    play: playSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
