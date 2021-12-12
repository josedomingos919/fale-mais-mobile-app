import { PriceType } from '../../store/reducers/home/type'

export type GetOriginNameByPriceIdType = {
  data: Array<PriceType>
  priceId: number
}
