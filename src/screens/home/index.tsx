import React, { useEffect, useState } from 'react'
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
import Select from '../../components/Inputs/Select'
import { getAllPlan, getAllPrice } from '../../api/api.routes'
import { setPlans, setPrices } from '../../store/reducers/home'
import { getSelectData } from '../../utilities/function'
import { alert } from '../../components/Shared/alert'
import { getDistictOrigin, getOriginNameByPriceId } from './script'

export default function Login() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.homeReducer)

  const [selectedPlan, setSelectedPlan] = useState()
  const [callDurationValue, setCallDurationValue] = useState()
  const [originValue, setOriginValue] = useState(0)
  const [destinationValue, setDestinationValue] = useState(0)

  async function inicialize() {
    const planResponse = await getAllPlan()
    const priceResponse = await getAllPrice()

    if (planResponse.error) {
      alert({
        message: planResponse.message,
        title: 'Atenção!',
        type: 'error',
      })
    } else {
      dispatch(setPlans({ plans: planResponse.data }))
    }

    if (priceResponse.error) {
      alert({
        message: priceResponse.message,
        title: 'Atenção!',
        type: 'error',
      })
    } else {
      dispatch(setPrices({ prices: priceResponse.data }))
    }
  }

  useEffect(() => {
    inicialize()
  }, [])

  useEffect(() => {
    setDestinationValue(0)
  }, [originValue])

  return (
    <MainContainer>
      <>
        <Container>
          <Header>
            <Image source={Icon} />
          </Header>

          <PageContent>
            <TitleContainer label="Custo da ligação" />

            <Select
              data={getDistictOrigin(
                getSelectData({
                  data: data.prices,
                  labelKey: 'origin',
                  valueKey: 'id',
                }),
              )}
              leftIcon={Icons.MaterialCommunityIcons({
                name: 'phone-outgoing',
              })}
              label="Origem"
              selectedValue={originValue}
              setSelectedValue={setOriginValue}
            />

            <Select
              data={getSelectData({
                data: getOriginNameByPriceId({
                  data: data.prices || [],
                  priceId: originValue,
                }),
                labelKey: 'destination',
                valueKey: 'id',
              })}
              leftIcon={Icons.MaterialCommunityIcons({
                name: 'phone-incoming',
              })}
              label="Destino"
              top={20}
              setSelectedValue={setDestinationValue}
              selectedValue={destinationValue}
            />

            <TextBox
              top={24}
              keyboardType="numeric"
              label="Tempo da ligação (min)"
              leftIcon={Icons.Entypo({ name: 'back-in-time' })}
              placeholder="ex.: 20"
              value={callDurationValue}
              onChangeText={(value) => {
                setCallDurationValue(value)
              }}
            />

            <Select
              selectedValue={selectedPlan}
              setSelectedValue={setSelectedPlan}
              data={getSelectData({
                data: data.plans,
                labelKey: 'name',
                valueKey: 'id',
              })}
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
              onPress={() => {}}
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
