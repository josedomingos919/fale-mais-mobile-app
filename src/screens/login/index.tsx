import React from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from './../../assets'
import TitleContainer from '../../components/containers/title'
import TextBox from '../../components/Inputs/TextBox'
import { Icons } from '../../components/icons'

export default function Login() {
  return (
    <MainContainer>
      <Container>
        <Header>
          <Image source={Icon} />
        </Header>

        <PageContent>
          <TitleContainer label="Login" />

          <TextBox
            leftIcon={Icons.Entypo({ name: 'email' })}
            placeholder="Email"
          />
          <TextBox
            leftIcon={Icons.Entypo({ name: 'key' })}
            placeholder="Senha"
            top={15}
          />
        </PageContent>
      </Container>
    </MainContainer>
  )
}
