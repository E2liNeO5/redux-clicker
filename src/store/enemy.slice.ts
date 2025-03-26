import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEnemy, EnemyProgressPayload, EnemyStartData } from "../types/Enemy.types";
import { ENEMY_IMAGES, ENEMY_INITIAL_HEALTH } from "../constants/Enemy.constants";
import { INITIAL_SHIELD_HEALTH } from "../constants/Shield.constants";

const initialState: IEnemy = {
  health: ENEMY_INITIAL_HEALTH,
  maxHealth: ENEMY_INITIAL_HEALTH,
  image: ENEMY_IMAGES[0],
  shieldMaxHealth: INITIAL_SHIELD_HEALTH,
  count: 1
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
    },
    enemyProgress: (state, { payload }: PayloadAction<EnemyProgressPayload>) => {
      state.count++
      state.image = payload.image
      state.maxHealth = payload.health
      state.health = payload.health
      state.modification = payload.modification
      state.shieldMaxHealth = payload.shieldMaxHealth
    },
    setStartEnemy: (state, { payload }: PayloadAction<EnemyStartData>) => {
      state.maxHealth = payload.health
      state.health = payload.health
      state.modification = payload.modification
      state.count = 1
    }
  }
})

export const { actions: enemyActions, reducer: enemyReducer } = enemySlice
