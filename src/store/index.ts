import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/login'

export const store = configureStore({
  reducer: {
    loginReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
