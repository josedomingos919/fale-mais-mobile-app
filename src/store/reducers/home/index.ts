// DUCKS Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomeStateProps } from './type'

const initialState: HomeStateProps = {
  plans: [],
  prices: [],
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
  },
})

export const { setPlans, setPrices } = homeSlice.actions

export default homeSlice.reducer
