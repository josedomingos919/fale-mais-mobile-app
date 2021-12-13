// DUCKS Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginProps } from './type'

const initialState: LoginProps = {
  email: '',
  password: '',
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    doLogin(state, action: PayloadAction<LoginProps>) {
      state = { ...state, ...action.payload }
    },
  },
})

export const { doLogin } = loginSlice.actions

export default loginSlice.reducer
