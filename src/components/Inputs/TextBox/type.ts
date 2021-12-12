import { ReactElement } from 'react'

export type TextBoxProps = {
  label?: string
  top?: number
  keyboardType?: string
  placeholder?: string
  leftIcon?: ReactElement
  value?: any
  onChangeText?: (value: any) => any
}

export type ContainerType = {
  top?: number
}

export type InputType = {
  marginLeft?: number
}
