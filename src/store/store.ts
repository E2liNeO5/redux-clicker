import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { hitReducer } from "./hit.slice";
import { playerReducer } from "./player.slice";
import { enemyReducer } from "./enemy.slice";
import { levelReducer } from "./level.slice";

const reducers = combineReducers({
  hitReducer,
  playerReducer,
  enemyReducer,
  levelReducer
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store