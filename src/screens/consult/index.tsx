import React from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from './../../assets'
import TitleContainer from '../../components/containers/title'
import { Icons } from '../../components/icons'
import { color } from '../../utilities/color'
import FloatButton from '../../components/Inputs/FloatButton'
import { useAppSelector } from '../../store/hooks'
import { ScreenProps } from '../../routes/types'

export default function Consult({ navigation }: ScreenProps) {
  const data = useAppSelector((state) => state.homeReducer)

  return (
    <MainContainer>
      <>
        <Container>
          <Header>
            <Image source={Icon} />
          </Header>

          <PageContent>
            <TitleContainer label="Resultado" />
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
