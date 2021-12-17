import React, { useEffect, useState } from 'react'
import MainContainer from '../../components/containers/main'
import { Container, Header, Image, PageContent } from './styles'
import { Icon } from '../../assets'
import TitleContainer from '../../components/containers/title'
import TextBox from '../../components/Inputs/TextBox'
import { Icons } from '../../components/icons'
import Button from '../../components/Inputs/Button'
import { color } from '../../utilities/color' 
import FloatButton from '../../components/Inputs/FloatButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Select from '../../components/Inputs/Select'
import { getAllPlan, getAllPrice, getCalc } from '../../api/api.routes'
import { saveCalc, setPlans, setPrices } from '../../store/reducers/home'
import { getSelectData } from '../../utilities/function'
import { alert } from '../../components/Shared/alert'
import { getDistinctOrigin, getOriginNameByPriceId, isFormOk } from './script'
import { ScreenProps } from '../../routes/types'
import { Linking } from 'react-native'
import { COMPANY_LINKEDIN } from '../../utilities/const'
import TouchAbleLabel from '../../components/Inputs/TouchAbleLabel'
 
export default function Login({ navigation }: ScreenProps) {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.homeReducer)

  const [selectedPlan, setSelectedPlan] = useState(0)
  const [callDurationValue, setCallDurationValue] = useState(undefined)
  const [originValue, setOriginValue] = useState(0)
  const [destinationValue, setDestinationValue] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  async function initialize() {
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

  async function resetFormData() {
    setSelectedPlan(0)
    setCallDurationValue(undefined)
    setOriginValue(0)
    setDestinationValue(0)
    setIsLoading(false)
  }

  async function handleCalc() {
    const formData = isFormOk({
      data: data.prices,
      selectedPlan,
      callDurationValue,
      originValue,
      destinationValue,
    })

    if (!formData) return

    setIsLoading(true)

    const response = await getCalc({
      destination: formData.destination,
      origin: formData.origin,
      planId: formData.planId,
      duration: formData.duration,
    })

    if (response.error) {
      alert({
        title: 'Erro!',
        message: 'Não foi possivel calcular, tente mais tarde!',
        type: 'error',
      })
    } else {
      dispatch(saveCalc({ calc: response.data }))
      navigation.navigate('Consult')
    }

    setIsLoading(false)
  }

  useEffect(() => {
    initialize()
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
              data={getDistinctOrigin({
                data: getSelectData({
                  data: data.prices,
                  labelKey: 'origin',
                  valueKey: 'id',
                }),
              })}
              leftIcon={Icons({
                type: 'MaterialCommunityIcons',
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
              leftIcon={Icons({
                type: 'MaterialCommunityIcons',
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
              leftIcon={Icons({ type: 'Entypo', name: 'back-in-time' })}
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
              leftIcon={Icons({
                type: 'MaterialCommunityIcons',
                name: 'account-tie-voice-outline',
              })}
              top={26}
            />

            <Button
              isLoading={isLoading}
              leftIcon={Icons({
                type: 'Entypo',
                name: 'login',
                size: 15,
                color: color.secondary,
              })}
              top={60}
              onPress={() => handleCalc()}
              label="Calcular"
            />

            <TouchAbleLabel
              onPress={() => {
                Linking.openURL(COMPANY_LINKEDIN)
              }}
              top={22}
              label="Saiba mais... ?"
            />
          </PageContent>
        </Container>

        <FloatButton
          onPress={() => resetFormData()}
          icon={Icons({
            type: 'MaterialCommunityIcons',
            name: 'progress-close',
            color: color.secondary,
          })}
          label="Novo"
        />
      </>
    </MainContainer>
  )
}
