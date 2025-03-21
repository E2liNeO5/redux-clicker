import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as hitReducer } from "./hit.slice";
import { reducer as playerReducer } from "./player.slice";
import { reducer as enemyReducer } from "./enemy.slice";

const reducers = combineReducers({
  hitReducer,
  playerReducer,
  enemyReducer
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store