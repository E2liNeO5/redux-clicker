import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlayer, IPlayerDamageUpgrade, IPlayerHealthUpgrade } from "../types/Player.types";
import { getSaves, savePlayer } from "../utils";
import { PLAYER_INITIAL_DAMAGE_MAX, PLAYER_INITIAL_DAMAGE_MIN, PLAYER_INITIAL_HEALTH, PLAYER_SAVE_KEY } from "../constants/Player.constants";

const saves = getSaves(PLAYER_SAVE_KEY)

const initialState: IPlayer = {
  health: saves?.health || PLAYER_INITIAL_HEALTH,
  maxHealth: saves?.maxHealth || PLAYER_INITIAL_HEALTH,
  damageMin: saves?.damageMin || PLAYER_INITIAL_DAMAGE_MIN,
  damageMax: saves?.damageMax || PLAYER_INITIAL_DAMAGE_MAX,
  healthCost: saves?.healthCost || 100,
  damageCost: saves?.damageCost || 100,
  healthUpCount: saves?.healthUpCount || 1,
  damageUpCount: saves?.damageUpCount || 1,
  score: saves?.score || 10000,
  healCount: saves?.healCount || 0,
  healthRatios: {
    linear: 10,
    sqrt: 2
  },
  damageRatios: {
    linear: 2,
    sqrt: 0.05
  },
  damageUpgradeCostRatios: {
    linear: 50,
    sqrt: 2
  },
  healthUpgradeCostRatios: {
    linear: 50,
    sqrt: 2
  }
}

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    playerHit: (state, { payload: damage }: PayloadAction<number>) => {
      state.health -= damage
      savePlayer(state)
    },
    buyDamageUpgrade: (state, { payload }: PayloadAction<IPlayerDamageUpgrade>) => {
      state.damageMin = payload.damageMin
      state.damageMax = payload.damageMax
      state.score -= payload.cost
      state.damageCost = payload.damageCost
      state.damageUpCount++
      savePlayer(state)
    },
    buyHealthUpgrade: (state, { payload }: PayloadAction<IPlayerHealthUpgrade>) => {
      state.health = payload.maxHealth
      state.maxHealth = payload.maxHealth
      state.score -= payload.cost
      state.healthCost = payload.healthCost
      state.healthUpCount++
      savePlayer(state)
    },
    setScore: (state, { payload }: PayloadAction<number>) => {
      state.score += payload
      savePlayer(state)
    },
    buyHeal: (state, { payload }: PayloadAction<number>) => {
      state.score -= payload
      state.healCount++
      savePlayer(state)
    },
    playerHeal: (state) => {
      if(state.healCount > 0 && state.health < state.maxHealth) {
        state.health = state.maxHealth
        state.healCount--
        savePlayer(state)
      }
    }
  }
})

export const { actions: playerActions, reducer: playerReducer } = playerSlice