import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { DEFAULT_ICON_COLOR, MIN_ICON_SIZE } from '../../utilities/const'
import { IconPropsTypes, IconType } from './type'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const iconsTypes: IconPropsTypes = {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
}

export const Icons = ({
  name,
  type,
  size = MIN_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
}: IconType) => {
  const IconSelected = iconsTypes[type]

  return <IconSelected name={name} size={size} color={color} />
}
