import React, { useEffect } from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from './../../assets'
import TitleContainer from '../../components/containers/title'
import TextBox from '../../components/Inputs/TextBox'
import { Icons } from '../../components/icons'
import Button from '../../components/Inputs/Button'
import { color } from '../../utilities/color'
import TouchAbleLable from '../../components/Inputs/TouchAbleLable'
import FloatButton from '../../components/Inputs/FloatButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { doLogin } from '../../store/reducers/login'

export default function Login() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.loginReducer)

  useEffect(() => {
    console.log('data=>', data)
  }, [data])

  function handleLogin() {
    dispatch(
      doLogin({
        email: 'teste',
        password: 'tehsg3974',
      }),
    )
  }

  return (
    <MainContainer>
      <>
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
              leftIcon={Icons.Entypo({
                name: 'login',
                size: 15,
                color: color.Secundary,
              })}
              top={40}
              onPress={handleLogin}
              label="Entrar"
            />

            <TouchAbleLable top={22} label="Clique aqui se perdeu a senha ?" />
          </PageContent>
        </Container>

        <FloatButton
          icon={Icons.Feather({
            name: 'user-plus',
            color: color.Secundary,
          })}
          label="Novo"
        />
      </>
    </MainContainer>
  )
}
