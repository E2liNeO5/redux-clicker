import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEnemy } from "../types/Enemy.types";
import { ENEMY_INITIAL_HEALTH, ENEMY_INITIAL_HEALTH_UP, ENEMY_MODIFY_CHANCE, IMAGES_PATH, INITIAL_STATS_UP_RATION } from "../constants/Enemy.constants";
import { getChanceSuccess, getEnemyImage, getEnemyModification } from "../utils";
import { INITIAL_SHIELD_HEALTH } from "../constants/Shield.constants";

const initialState: IEnemy = {
  health: ENEMY_INITIAL_HEALTH,
  maxHealth: ENEMY_INITIAL_HEALTH,
  healthUp: ENEMY_INITIAL_HEALTH_UP,
  statsUpRatio: INITIAL_STATS_UP_RATION,
  image: `${IMAGES_PATH}enemy1.png`,
  shieldMaxHealth: INITIAL_SHIELD_HEALTH
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
    nextEnemy: (state) => {
      state.image = getEnemyImage()
      state.maxHealth = Math.ceil(state.maxHealth + state.healthUp)
      state.health = state.maxHealth
      state.healthUp *= state.statsUpRatio

      state.shieldMaxHealth = Math.ceil(state.maxHealth / 5 * state.statsUpRatio)

      if(getChanceSuccess(ENEMY_MODIFY_CHANCE))
        state.modification = getEnemyModification(state)
    }
  }
})

export const { actions, reducer } = enemySlice
