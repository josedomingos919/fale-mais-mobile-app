import React from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, Label } from './style'
import { TouchAbleLabelProps } from './type'

const TouchAbleLabel = ({
  label,
  top = DEFAULT_TOP_VALUE,
  onPress,
  ...props
}: TouchAbleLabelProps): JSX.Element => (
  <Container top={top} onPress={onPress} {...props} activeOpacity={0.8}>
    <Label>{label}</Label>
  </Container>
)

export default TouchAbleLabel
