import { StatusBar } from 'expo-status-bar'
import React from 'react'

import AppRoutes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <AppRoutes />
    </>
  )
}
