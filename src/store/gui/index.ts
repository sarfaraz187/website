import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ELanguages } from "@src/i18n/intl";
import { ETheme, TInitialState } from "@src/store/gui/gui.types";

const initialState: TInitialState = {
  theme: ETheme.Light,
  lang: ELanguages.EN,
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
