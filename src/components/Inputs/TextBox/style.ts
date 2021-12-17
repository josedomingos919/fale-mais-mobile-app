import styled from 'styled-components/native'
import { color } from '../../../utilities/color'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { ContainerType } from './type'

export const Container = styled.View<ContainerType>`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  border: 1px solid ${color.whiteDark};
  border-radius: 10px;
  margin-top: ${({ top = DEFAULT_TOP_VALUE }) => top}px;
`

export const TextInput = styled.TextInput<any>`
  flex: 1;
  height: 100%;
`
export const Label = styled.Text`
  position: absolute;
  top: -15px;
  margin-bottom: -18px;
  margin-left: 27px;
  color: ${color.firstBlue};
  background-color: ${color.secondary};
  padding: 5px;
`
