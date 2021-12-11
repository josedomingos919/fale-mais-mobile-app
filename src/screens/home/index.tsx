import React, { useEffect } from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from '../../assets'
import TitleContainer from '../../components/containers/title'
import TextBox from '../../components/Inputs/TextBox'
import { Icons } from '../../components/icons'
import Button from '../../components/Inputs/Button'
import { color } from '../../utilities/color'
import TouchAbleLable from '../../components/Inputs/TouchAbleLable'
import FloatButton from '../../components/Inputs/FloatButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { doLogin } from '../../store/reducers/login'
import Select from '../../components/Inputs/Select'

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
            <TitleContainer label="Consultar Valor" />

            <Select
              data={[]}
              label="Origem"
              leftIcon={Icons.MaterialCommunityIcons({
                name: 'phone-outgoing',
              })}
            />

            <Select
              data={[]}
              label="Destino"
              leftIcon={Icons.MaterialCommunityIcons({
                name: 'phone-incoming',
              })}
              top={20}
            />

            <TextBox
              top={24}
              keyboardType="numeric"
              label="Tempo da ligação (min)"
              leftIcon={Icons.Entypo({ name: 'back-in-time' })}
              placeholder="ex.: 20"
            />

            <Select
              data={[]}
              label="Plano"
              leftIcon={Icons.MaterialCommunityIcons({
                name: 'account-tie-voice-outline',
              })}
              top={26}
            />

            <Button
              leftIcon={Icons.Entypo({
                name: 'login',
                size: 15,
                color: color.Secundary,
              })}
              top={60}
              onPress={handleLogin}
              label="Calcular"
            />

            <TouchAbleLable top={22} label="Saiba mais... ?" />
          </PageContent>
        </Container>

        <FloatButton
          icon={Icons.MaterialCommunityIcons({
            name: 'progress-close',
            color: color.Secundary,
          })}
          label="Novo"
        />
      </>
    </MainContainer>
  )
}
