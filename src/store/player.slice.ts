import { createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../types/Player.types";

const initialState: IPlayer = {
  health: 100,
  maxHealth: 100,
  damage: 5
}

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {

  }
})

export const { actions, reducer } = playerSlice