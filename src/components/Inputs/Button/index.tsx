import React from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, IconView, ViewContent, Label } from './style'
import { ButtonProps } from './type'
import { ActivityIndicator } from 'react-native'
import { color } from '../../../utilities/color'

const Button = ({
  label,
  leftIcon,
  isLoading = false,
  top = DEFAULT_TOP_VALUE,
  onPress = () => {},
  ...props
}: ButtonProps): JSX.Element => (
  <Container
    top={top}
    onPress={onPress}
    activeOpacity={0.8}
    disabled={isLoading}
    {...props}
  >
    <IconView>
      {isLoading ? (
        <ActivityIndicator color={color.secondary} size={'small'} />
      ) : (
        leftIcon
      )}
    </IconView>
    <ViewContent>
      <Label>{label}</Label>
    </ViewContent>
  </Container>
)

export default Button
