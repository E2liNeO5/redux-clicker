import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILevel } from "../types/Level.types";
import { levels } from "../constants/Level.constants";

const initialState: ILevel = {
  currentLevel: 1,
  healthRatios: levels[0].healthRatios,
  startHealth: levels[0].startHealth
}
  

export const levelSlice = createSlice({
  name: 'levelSlice',
  initialState,
  reducers: {
    setLevel: (state, { payload: level }: PayloadAction<number>) => {
      state.currentLevel = level
      const levelData = levels.find($level => $level.currentLevel === level)
      state.healthRatios = levelData?.healthRatios || levels[0].healthRatios
      state.startHealth = levelData?.startHealth || levels[0].startHealth
    }
  }
})

export const { actions: levelActions, reducer: levelReducer } = levelSlice