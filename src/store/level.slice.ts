import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILevel } from "../types/Level.types";
import { LEVEL_SAVE_KEY, levels } from "../constants/Level.constants";
import { setSaves } from "../utils";

const initialState: ILevel = {
  currentLevel: 1,
  startHealth: levels[0].startHealth,
  startDamageMin: levels[0].startDamageMin,
  startDamageMax: levels[0].startDamageMax,
  healthRatios: levels[0].healthRatios,
  damageRatios: levels[0].damageRatios,
  scoreRatios: levels[0].scoreRatios,
  startScore: levels[0].startScore,
  enemyImages: levels[0].enemyImages
}
  

export const levelSlice = createSlice({
  name: 'levelSlice',
  initialState,
  reducers: {
    setLevel: (state, { payload: level }: PayloadAction<number>) => {
      state.currentLevel = level
      const levelData = levels.find($level => $level.currentLevel === level) || levels[0]
      state.healthRatios = levelData.healthRatios
      state.damageRatios = levelData.damageRatios
      state.startHealth = levelData.startHealth
      state.startDamageMin = levelData.startDamageMin
      state.startDamageMax = levelData.startDamageMax
      state.scoreRatios = levelData.scoreRatios
      state.startScore = levelData.startScore
      state.enemyImages = levelData.enemyImages

      setSaves(LEVEL_SAVE_KEY, state)
    }
  }
})

export const { actions: levelActions, reducer: levelReducer } = levelSlice