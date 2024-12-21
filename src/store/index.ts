import { addListener, configureStore } from "@reduxjs/toolkit";
import { guiReducer as gui } from "@src/store/gui";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    gui,
  },
  devTools: {
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const appAddListener = addListener.withTypes<RootState, AppDispatch>();
