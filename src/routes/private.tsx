import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'

import LoginScreen from '../screens/login'

const RootStack = createStackNavigator<RootStackParamList>()

export default function PrivateRoutes() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <RootStack.Screen name="Home" component={LoginScreen} />
    </RootStack.Navigator>
  )
}
