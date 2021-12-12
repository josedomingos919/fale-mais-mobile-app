export type PlanType = {
  id: number
  name: string
  maxMinute: number
  price: number
  percentageAdd: number
  createdAt: string
  updatedAt: string
}

export type PriceType = {
  id: number
  origin: string
  destination: string
  tariff: number
  createdAt: string
  updatedAt: string
}

export interface HomeStateProps {
  plans?: Array<PlanType>
  prices?: Array<PriceType>
  calc?: Object
}
