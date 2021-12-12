import { PriceType } from '../../store/reducers/home/type'

export type GetOriginNameByPriceIdType = {
  data: Array<PriceType>
  priceId: number
}

export type GetDestinationByOriginNameType = {
  data: Array<any>
  originName: string
}

export type GetDistictOriginType = {
  data: Array<any>
}

export type GetPriceItemByIdType = {
  data: Array<any>
  id: number | string | undefined
}

export type IsFormOkType = {
  data?: Array<any>
  selectedPlan: number | string | undefined
  callDurationValue: number | string | undefined
  originValue: number | string | undefined
  destinationValue: number | string | undefined
}
