import React, { ReactElement } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, ViewContent, Label } from './style'
import { ButtonProps } from './type'

const FloatButton = ({
  icon,
  label,
  onPress,
  top = DEFAULT_TOP_VALUE,
  ...props
}: ButtonProps): ReactElement => (
  <Container activeOpacity={0.4} top={top} onPress={onPress} {...props}>
    <ViewContent>{icon ?? <Label>{label}</Label>}</ViewContent>
  </Container>
)

export default FloatButton
