import React, { FC, ReactElement } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, ViewContent, Label } from './style'
import { ButtonProps } from './type'

const FloatButton: FC<ButtonProps> = ({
  label,
  icon,
  top = DEFAULT_TOP_VALUE,
  onPress,
  ...props
}): ReactElement => {
  return (
    <Container top={top} onPress={onPress} {...props} activeOpacity={0.4}>
      <ViewContent>{icon ? icon : <Label>{label}</Label>}</ViewContent>
    </Container>
  )
}

export default FloatButton
