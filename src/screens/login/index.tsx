import React from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from './../../assets'
import TitleContainer from '../../components/containers/title'
import TextBox from '../../components/Inputs/TextBox'
import { Icons } from '../../components/icons'
import Button from '../../components/Inputs/Button'
import { color } from '../../utilities/color'

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
            label="Entrar"
            leftIcon={Icons.Entypo({ name: 'email' })}
            placeholder="ex.: jose35@gmail.com"
          />

          <TextBox
            label="Senha"
            leftIcon={Icons.Entypo({ name: 'key' })}
            placeholder="ex.: 123.qwe"
            top={18}
          />

          <Button
            leftIcon={Icons.Entypo({ name: 'key', color: color.Secundary })}
            top={40}
            label="Entrar"
          />
        </PageContent>
      </Container>
    </MainContainer>
  )
}
