import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import HomeScreen from '../screens/home'
import ConsultScreen from '../screens/consult'

const RootStack = createStackNavigator<RootStackParamList>()

export default function PublicRoutes() {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Consult" component={ConsultScreen} />
    </RootStack.Navigator>
  )
}
