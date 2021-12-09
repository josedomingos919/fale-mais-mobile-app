import React, { FC, ReactElement } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, TextInput } from './style'
import { TextBoxProps } from './type'

const TextBox: FC<TextBoxProps> = ({
  leftIcon,
  top = DEFAULT_TOP_VALUE,
  ...props
}): ReactElement => {
  return (
    <>
      <Container top={top}>
        {leftIcon}
        <TextInput marginLeft={leftIcon && 8 | 0} {...props} />
      </Container>
    </>
  )
}

export default TextBox
