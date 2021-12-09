import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Toast from 'react-native-toast-message'
import AppRoutes from './src/routes'
import { MAX_TOAST_VISIBILITY_TIME } from './src/utilities/const'
import { store } from './src/store'
import { Provider as ReduxProvider } from 'react-redux'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StatusBar hidden={true} />
      <AppRoutes />
      <Toast visibilityTime={MAX_TOAST_VISIBILITY_TIME} />
    </ReduxProvider>
  )
}
