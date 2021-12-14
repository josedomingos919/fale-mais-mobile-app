// DUCKS Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CalcType, HomeStateProps } from './type'

const initialState: HomeStateProps = {
  plans: [],
  prices: [],
  calc: {} as CalcType,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,

  reducers: {
    setPrices(state, action: PayloadAction<HomeStateProps>) {
      state.prices = action.payload.prices
    },

    setPlans(state, action: PayloadAction<HomeStateProps>) {
      state.plans = action.payload.plans
    },

    saveCalc(state, action: PayloadAction<HomeStateProps>) {
      state.calc = action.payload.calc
    },
  },
})

export const { setPlans, setPrices, saveCalc } = homeSlice.actions

export default homeSlice.reducer
