import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { DEFAULT_ICON_COLOR, MIN_ICON_SIZE } from '../../utilities/const'
import { IconType } from './type'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export const Icons = {
  Entypo: ({
    name,
    size = MIN_ICON_SIZE,
    color = DEFAULT_ICON_COLOR,
  }: IconType) => <Entypo name={name} size={size} color={color} />,

  Feather: ({
    name,
    size = MIN_ICON_SIZE,
    color = DEFAULT_ICON_COLOR,
  }: IconType) => <Feather name={name} size={size} color={color} />,

  MaterialCommunityIcons: ({
    name,
    size = MIN_ICON_SIZE,
    color = DEFAULT_ICON_COLOR,
  }: IconType) => (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  ),

  FontAwesome5: ({
    name,
    size = MIN_ICON_SIZE,
    color = DEFAULT_ICON_COLOR,
  }: IconType) => <FontAwesome5 name={name} size={size} color={color} />,
}
