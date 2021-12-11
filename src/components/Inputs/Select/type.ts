import { ReactElement } from 'react'

export type SelectItemType = {
  value: any
  label: string
}

export type SelectProps = {
  data: Array<SelectItemType>
  label?: string
  top?: number
  placeholder?: string
  leftIcon?: ReactElement
  selectedValue?: any
  setSelectedValue?: (value: any) => any
}

export type ContainerType = {
  top?: number
}

export type InputType = {
  marginLeft?: number
}
