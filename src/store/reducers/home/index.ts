// DUCKS Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomeProps } from './type'

const initialState: HomeProps = {
  plans: [],
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPlans(state, action: PayloadAction<HomeProps>) {
      state.plans = action.payload.plans
    },
  },
})

export const { setPlans } = homeSlice.actions

export default homeSlice.reducer
