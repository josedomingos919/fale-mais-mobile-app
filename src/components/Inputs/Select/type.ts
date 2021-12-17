export type SelectItemType = {
  value: any
  label: string
}

export type SelectProps = {
  top?: number
  label?: string
  data: Array<SelectItemType>
  placeholder?: string
  leftIcon?: JSX.Element
  selectedValue?: any
  setSelectedValue?: (value: any) => void
}

export type ContainerType = {
  top?: number
}

export type InputType = {
  marginLeft?: number
}
