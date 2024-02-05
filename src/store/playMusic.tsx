import { createSlice } from "@reduxjs/toolkit";

export const playSlice = createSlice({
  name: "counter",
  initialState: {
    autoPlay: false,
  },
  reducers: {
    playMusic: (state) => {
      state.autoPlay = true;
    },
  },
});

export const { playMusic } = playSlice.actions;
