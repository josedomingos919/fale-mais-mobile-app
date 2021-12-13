import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './reducers/home'

export const store = configureStore({
  reducer: {
    homeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
