import React, { FC, ReactElement } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, Label } from './style'
import { TouchAbleLableProps } from './type'

const TouchAbleLable: FC<TouchAbleLableProps> = ({
  label,
  top = DEFAULT_TOP_VALUE,
  onPress,
  ...props
}): ReactElement => {
  return (
    <Container top={top} onPress={onPress} {...props} activeOpacity={0.8}>
      <Label>{label}</Label>
    </Container>
  )
}

export default TouchAbleLable
