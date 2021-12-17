import styled from 'styled-components/native'
import { color } from '../../utilities/color'
import { font } from '../../utilities/font'

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

export const ContainerTotal = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
export const CardTotal = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  min-height: 100px;
  background-color: ${color.primary};
  border-radius: 20px;
`
export const TextTotal = styled.Text`
  color: ${color.secondary};
  font-size: ${font.size.big2}px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const MoneyTextTotal = styled.Text`
  color: ${color.secondary};
  font-size: ${font.size.big5}px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const ContainerMoreInfo = styled.View`
  padding: 10px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background-color: ${color.dark2};
  width: 100%;
`

export const ContainerMoreInfoLine = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  background-color: ${color.dark2};
  width: 100%;
`

export const TextInfoRight = styled.Text`
  color: ${color.dark};
  font-size: ${font.size.normal}px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const TextInfoLeft = styled.Text`
  color: ${color.firstBlue};
  font-size: ${font.size.big2}px;
  font-weight: bold;
  letter-spacing: 2px;
`
