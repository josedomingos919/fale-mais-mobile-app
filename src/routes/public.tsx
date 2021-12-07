import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'

import LoginScreen from '../screens/login'

const RootStack = createStackNavigator<RootStackParamList>()

export default function PublicRoutes() {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <RootStack.Screen name="Home" component={LoginScreen} />
    </RootStack.Navigator>
  )
}
