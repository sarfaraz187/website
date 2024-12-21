import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ETheme, TInitialState } from "@src/store/gui/gui.types";

const initialState: TInitialState = {
  theme: ETheme.Light,
};

export const guiSlice = createSlice({
  name: "gui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
  selectors: {
    theme: (state) => state.theme,
  },
});

export const guiActions = guiSlice.actions;

export const guiSelectors = guiSlice.selectors;

export const guiReducer = guiSlice.reducer;
