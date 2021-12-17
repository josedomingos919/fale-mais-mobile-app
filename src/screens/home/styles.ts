import styled from 'styled-components/native'
import { color } from '../../utilities/color'

export const Container = styled.ScrollView`
  background-color: ${color.secondary};
`
export const Header = styled.View`
  height: 150px;
  width: 100%;
  background-color: ${color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderText = styled.Text`
  color: ${color.secondary};
  font-size: 14px;
  font-weight: bold;
`

export const Image = styled.Image`
  transform: scale(1);
`

export const PageContent = styled.View`
  position: relative;
  padding: 20px;
  margin-top: -15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${color.secondary};
  flex: 1;
`
