import styled from 'styled-components/native'
import { color } from '../../../utilities/color'
import { DEFAULT_TOP_VALUE } from '../../../utilities/const'
import { ContainerType } from './type'

export const Container = styled.TouchableOpacity<ContainerType>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  margin-top: ${({ top = DEFAULT_TOP_VALUE }) => top}px;
  background-color: ${color.fourBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 2px;
  margin-right: 20px;
  margin-bottom: 50px;
`
export const ViewContent = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.whiteDark};
  border-radius: 50px;
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
