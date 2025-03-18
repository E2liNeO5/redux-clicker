import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as hitState } from "./hit.slice";

const reducers = combineReducers({
  hitState
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store