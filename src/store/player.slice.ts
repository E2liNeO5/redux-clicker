import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentHealth: 100,
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