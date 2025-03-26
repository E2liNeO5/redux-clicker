import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHit, IHitData } from "../types/Hit.types";

const initialState: IHit[]  = [] 

export const hitSlice = createSlice({
  name: 'hitSlice',
  initialState,
  reducers: {
    addHit: (state, {payload: item }: PayloadAction<IHitData>) => {
      state.push({
        id: item.id,
        x: item.x,
        y: item.y,
        variation: item.variation,
        frame: 0
      })
    },

    removeHit: (state, { payload: id }: PayloadAction<number>) => {
      const index = state.findIndex(item => item.id === id)
      state.splice(index, 1)
    }
  }
})

export const { actions: hitActions, reducer: hitReducer } = hitSlice