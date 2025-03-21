import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEnemy } from "../types/Enemy.types";

const initialState: IEnemy = {
  health: 100,
  maxHealth: 100,
  image: 'images/enemies/enemy1.png',
  
}

export const enemySlice = createSlice({
  name: 'enemySlice',
  initialState,
  reducers: {
    hitEnemy: (state, { payload: damage }: PayloadAction<number>) => {
      state.health -= damage
    },
    hitShield: (state, { payload: damage }: PayloadAction<number>) => {
      const mod = state.modification
      mod && (mod.shieldHealth -= damage)
    }
  }
})

export const { actions, reducer } = enemySlice
