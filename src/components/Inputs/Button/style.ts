import styled from 'styled-components/native'
import { color } from '../../../utilities/color'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { ContainerType } from './type'

export const Container = styled.TouchableOpacity<ContainerType>`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  border-radius: 10px;
  margin-top: ${({ top = DEFAULT_TOP_VALUE }) => top}px;
  background-color: ${color.fourBlue};
  height: 45px;
`
export const ViewContent = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
`
export const IconView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  margin-right: 15px;
  background-color: ${color.balckOpacity1};
`
export const Label = styled.Text`
  color: ${color.Secundary};
`
