import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../types/Player.types";

const initialState: IPlayer = {
  health: 100,
  maxHealth: 100,
  damageMin: 3,
  damageMax: 5
}

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    playerHit: (state, { payload: damage }: PayloadAction<number>) => {
      state.health -= damage
    }
  }
})

export const { actions: playerActions, reducer: playerReducer } = playerSlice