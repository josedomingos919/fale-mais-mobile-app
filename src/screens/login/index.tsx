import React from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from './../../assets'

export default function Login() {
  return (
    <MainContainer>
      <Container>
        <Header>
          <Image source={Icon} />
        </Header>

        <PageContent></PageContent>
      </Container>
    </MainContainer>
  )
}
