import styled from 'styled-components/native'
import { color } from '../../../utilities/color'
import { font } from '../../../utilities/font'

export const Container = styled.View`
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
`
export const Text = styled.Text`
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 10px;
  color: ${color.firstBlue};
  border: 0px solid ${color.blackOpacity1};
  padding-bottom: 5px;
  font-size: ${font.size.large}px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-width: 2px;
  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.5);
`
