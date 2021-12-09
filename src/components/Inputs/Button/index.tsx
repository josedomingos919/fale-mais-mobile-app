import React, { FC, ReactElement } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, IconView, ViewContent, Label } from './style'
import { ButtonProps } from './type'
import { ActivityIndicator } from 'react-native'
import { color } from '../../../utilities/color'

const Button: FC<ButtonProps> = ({
  isLoading = false,
  label,
  leftIcon,
  top = DEFAULT_TOP_VALUE,
  onPress,
  ...props
}): ReactElement => {
  return (
    <Container top={top} onPress={onPress} {...props} activeOpacity={0.8}>
      <IconView>
        {(isLoading && (
          <ActivityIndicator color={color.Secundary} size={'small'} />
        )) ||
          (leftIcon && leftIcon)}
      </IconView>
      <ViewContent>
        <Label>{label}</Label>
      </ViewContent>
    </Container>
  )
}

export default Button
