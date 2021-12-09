import { ReactElement } from 'react'

export type ButtonProps = {
  isLoading?: boolean
  label?: string
  top?: number
  placeholder?: string
  leftIcon?: ReactElement
  onPress?: () => {}
}

export type ContainerType = {
  top?: number
}

export type InputType = {
  marginLeft?: number
}
