import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getInitialLanguage } from "@src/lib/utils";
import { ETheme, TInitialState } from "@src/store/gui/gui.types";

const initialState: TInitialState = {
  theme: ETheme.Light,
  lang: getInitialLanguage(),
};

export const guiSlice = createSlice({
  name: "gui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
  selectors: {
    theme: (state) => state.theme,
    lang: (state) => state.lang,
  },
});

export const guiActions = guiSlice.actions;

export const guiSelectors = guiSlice.selectors;

export const guiReducer = guiSlice.reducer;
