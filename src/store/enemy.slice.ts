import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEnemy, EnemyProgressPayload, EnemyStartData } from "../types/Enemy.types";
import { ENEMY_IMAGES, ENEMY_INITIAL_HEALTH } from "../constants/Enemy.constants";

const initialState: IEnemy = {
  health: ENEMY_INITIAL_HEALTH,
  maxHealth: ENEMY_INITIAL_HEALTH,
  damageMin: 2,
  damageMax: 4,
  attack_delay: 2000,
  image: ENEMY_IMAGES[0],
  count: 0
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
      state.damageMin = payload.damageMin
      state.damageMax = payload.damageMax
      state.modification = payload.modification
    },
    setStartEnemy: (state, { payload }: PayloadAction<EnemyStartData>) => {
      state.maxHealth = payload.health
      state.health = payload.health
      state.damageMin = payload.damageMin
      state.damageMax = payload.damageMax
      state.modification = payload.modification
      state.count = 1
    },
    removeModification: (state) => {
      state.modification = null
    }
  }
})

export const { actions: enemyActions, reducer: enemyReducer } = enemySlice
