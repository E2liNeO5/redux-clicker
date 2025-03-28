import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILevel } from "../types/Level.types";
import { levels } from "../constants/Level.constants";

const initialState: ILevel = {
  currentLevel: 1,
  startHealth: levels[0].startHealth,
  startDamageMin: levels[0].startDamageMin,
  startDamageMax: levels[0].startDamageMax,
  healthRatios: levels[0].healthRatios,
  damageRatios: levels[0].damageRatios
}
  

export const levelSlice = createSlice({
  name: 'levelSlice',
  initialState,
  reducers: {
    setLevel: (state, { payload: level }: PayloadAction<number>) => {
      state.currentLevel = level
      const levelData = levels.find($level => $level.currentLevel === level)
      state.healthRatios = levelData?.healthRatios || levels[0].healthRatios
      state.damageRatios = levelData?.damageRatios || levels[0].damageRatios
      state.startHealth = levelData?.startHealth || levels[0].startHealth
      state.startDamageMin = levelData?.startDamageMin || levels[0].startDamageMin
      state.startDamageMax = levelData?.startDamageMax || levels[0].startDamageMax
    }
  }
})

export const { actions: levelActions, reducer: levelReducer } = levelSlice