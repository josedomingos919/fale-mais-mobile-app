import React, { FC, ReactElement, useState } from 'react'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { Container, Label } from './style'
import { SelectProps } from './type'
import { Picker } from '@react-native-picker/picker'

const Select: FC<SelectProps> = ({
  data = [],
  label,
  leftIcon,
  top = DEFAULT_TOP_VALUE,
  selectedValue,
  setSelectedValue = () => {},
  ...props
}): ReactElement => {
  return (
    <Container top={top}>
      <Label>{label}</Label>
      {leftIcon}
      <Picker
        style={{
          flex: 1,
        }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="..." key="-1" value="" />
        {data.map(({ value, label }, index) => (
          <Picker.Item label={label} key={index} value={value} />
        ))}
      </Picker>
    </Container>
  )
}

export default Select
