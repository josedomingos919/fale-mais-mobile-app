import styled from 'styled-components/native'
import { color } from '../../../utilities/color'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { ContainerType } from './type'

export const Container = styled.TouchableOpacity<ContainerType>`
  margin-top: ${({ top = DEFAULT_TOP_VALUE }) => top}px;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Label = styled.Text`
  color: ${color.dark};
`
