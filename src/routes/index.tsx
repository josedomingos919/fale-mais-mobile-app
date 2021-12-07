import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PublicRoutes from './public'

function RootRoutes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  )
}

export default RootRoutes
