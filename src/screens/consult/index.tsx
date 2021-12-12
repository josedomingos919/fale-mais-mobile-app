import React from 'react'
import MainContainer from '../../components/containers/main'
import {
  CardTotal,
  Container,
  ContainerTotal,
  Header,
  Image,
  MoneyTextTotal,
  PageContent,
  TextTotal,
  ContainerMoreInfo,
  ContainerMoreInfoLine,
  TextInfoRight,
  TextInfoLeft,
} from './styles'
import { Icon } from './../../assets'
import TitleContainer from '../../components/containers/title'
import { Icons } from '../../components/icons'
import { color } from '../../utilities/color'
import FloatButton from '../../components/Inputs/FloatButton'
import { useAppSelector } from '../../store/hooks'
import { ScreenProps } from '../../routes/types'
import { formatMonay } from '../../utilities/function'

export default function Consult({ navigation }: ScreenProps) {
  const calcData = useAppSelector((state) => state.homeReducer.calc)

  return (
    <MainContainer>
      <>
        <Container>
          <Header>
            <Image source={Icon} />
          </Header>

          <PageContent>
            <TitleContainer label={'Resultado'} />

            <ContainerTotal>
              <CardTotal>
                <TextTotal>Total</TextTotal>
                <MoneyTextTotal>
                  $ {formatMonay(calcData?.totalWithTolkMore)}
                </MoneyTextTotal>
              </CardTotal>
            </ContainerTotal>

            <ContainerMoreInfo>
              <ContainerMoreInfoLine>
                <TextInfoRight>Plano:</TextInfoRight>
                <TextInfoLeft>{calcData?.plan.name || '-'}</TextInfoLeft>
              </ContainerMoreInfoLine>

              <ContainerMoreInfoLine>
                <TextInfoRight>S/ Plano:</TextInfoRight>
                <TextInfoLeft>
                  $ {formatMonay(calcData?.totalWithOutTolkMore)}
                </TextInfoLeft>
              </ContainerMoreInfoLine>

              <ContainerMoreInfoLine>
                <TextInfoRight>Duração (min):</TextInfoRight>
                <TextInfoLeft>{calcData?.duration || '-'}</TextInfoLeft>
              </ContainerMoreInfoLine>

              <ContainerMoreInfoLine>
                <TextInfoRight>Excedeu (min):</TextInfoRight>
                <TextInfoLeft>{calcData?.minutesOut || '-'}</TextInfoLeft>
              </ContainerMoreInfoLine>

              <ContainerMoreInfoLine>
                <TextInfoRight>Origem:</TextInfoRight>
                <TextInfoLeft>{calcData?.origin || '-'}</TextInfoLeft>
              </ContainerMoreInfoLine>

              <ContainerMoreInfoLine>
                <TextInfoRight>Destino:</TextInfoRight>
                <TextInfoLeft>{calcData?.destination || '-'}</TextInfoLeft>
              </ContainerMoreInfoLine>
            </ContainerMoreInfo>
          </PageContent>
        </Container>

        <FloatButton
          onPress={() => navigation.goBack()}
          icon={Icons.Entypo({
            name: 'arrow-with-circle-left',
            color: color.Secundary,
          })}
          label="Novo"
        />
      </>
    </MainContainer>
  )
}
