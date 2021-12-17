import { alert } from '../../components/Shared/alert'
import { PriceType } from '../../store/reducers/home/type'
import { isEmpty } from '../../utilities/function'
import {
  GetDestinationByOriginNameType,
  getDistinctOriginType,
  GetOriginNameByPriceIdType,
  GetPriceItemByIdType,
  IsFormOkType,
} from './type'

export const getDistinctOrigin = ({ data }: getDistinctOriginType) => {
  const existingOrigin: Array<string> = []

  return data.filter(({ label }) => {
    existingOrigin.push(label)

    return existingOrigin.filter((val) => val == label).length === 1
  })
}

export const getDestinationByOriginName = ({
  data,
  originName,
}: GetDestinationByOriginNameType) =>
  data.filter(({ origin }) => origin === originName)

export const getOriginNameByPriceId = ({
  data = [],
  priceId = 0,
}: GetOriginNameByPriceIdType) =>
  data.filter(
    ({ origin }) => origin === data.find(({ id }) => id === priceId)?.origin,
  )

export const getPriceItemById = ({ data = [], id = 0 }: GetPriceItemByIdType) =>
  data.find((e: PriceType) => e?.id === id)

export const isFormOk = ({
  data = [],
  selectedPlan,
  callDurationValue,
  originValue = '',
  destinationValue,
}: IsFormOkType) => {
  const title = 'Atenção!'
  const type = 'error'

  if (isEmpty(originValue)) {
    alert({ message: 'Não selecionou a origem!', title, type })
    return false
  }

  if (isEmpty(destinationValue)) {
    alert({ message: 'Não selecionou o destino!', title, type })
    return false
  }

  if (isEmpty(callDurationValue)) {
    alert({ message: 'Não especificou o tempo da ligação!', title, type })
    return false
  }

  if (isEmpty(selectedPlan)) {
    alert({ message: 'Não selecionou o plano!', title, type })
    return false
  }

  alert.hide()

  return {
    origin: getPriceItemById({ data, id: originValue }).origin,
    destination: getPriceItemById({ data, id: destinationValue }).destination,
    duration: callDurationValue,
    planId: selectedPlan,
  }
}
