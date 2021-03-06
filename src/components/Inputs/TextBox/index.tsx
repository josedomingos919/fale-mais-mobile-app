import React, { FC, ReactElement } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, Label, TextInput } from './style'
import { TextBoxProps } from './type'

const TextBox: FC<TextBoxProps> = ({
  label,
  leftIcon,
  top = DEFAULT_TOP_VALUE,
  onChangeText = (val) => {},
  value = null,
  ...props
}): ReactElement => {
  return (
    <>
      <Container top={top}>
        <Label>{label}</Label>
        {leftIcon}
        <TextInput
          onChangeText={onChangeText}
          value={value}
          marginLeft={leftIcon && 8 | 0}
          {...props}
        />
      </Container>
    </>
  )
}

export default TextBox
