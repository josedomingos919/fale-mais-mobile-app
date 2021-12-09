import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Toast from 'react-native-toast-message'
import AppRoutes from './src/routes'
import { MAX_TOAST_VISIBILITY_TIME } from './src/utilities/const'

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <AppRoutes />
      <Toast visibilityTime={MAX_TOAST_VISIBILITY_TIME} />
    </>
  )
}
