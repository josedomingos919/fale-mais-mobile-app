import { PriceType } from '../../store/reducers/home/type'
import { GetOriginNameByPriceIdType } from './type'

export const getDistictOrigin = (data: Array<any>) => {
  const existingOrigin: Array<string> = []

  return data.filter(({ label }) => {
    existingOrigin.push(label)

    return existingOrigin.filter((val) => val == label).length === 1
  })
}

export const getDestinationByOriginName = (
  data: Array<any>,
  originName: string,
) => data.filter(({ origin }) => origin === originName)

export const getOriginNameByPriceId = ({
  data = [],
  priceId = 0,
}: GetOriginNameByPriceIdType) =>
  data.filter(
    ({ origin }) => origin === data.find(({ id }) => id === priceId)?.origin,
  )
