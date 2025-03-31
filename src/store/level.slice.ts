import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILevel } from "../types/Level.types";
import { LEVEL_SAVE_KEY, levels } from "../constants/Level.constants";
import { setSaves } from "../utils";

const initialState: ILevel = {}
  

export const levelSlice = createSlice({
  name: 'levelSlice',
  initialState,
  reducers: {
    setLevel: (state, { payload: level }: PayloadAction<number>) => {
      state.currentLevel = level
      const levelData = levels.find($level => $level.currentLevel === level)
      state.healthRatios = levelData?.healthRatios
      state.damageRatios = levelData?.damageRatios
      state.startHealth = levelData?.startHealth
      state.startDamageMin = levelData?.startDamageMin
      state.startDamageMax = levelData?.startDamageMax

      setSaves(LEVEL_SAVE_KEY, state)
    }
  }
})

export const { actions: levelActions, reducer: levelReducer } = levelSlice