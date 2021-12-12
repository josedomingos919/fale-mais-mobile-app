export type PlanType = {
  id: number
  name: string
  maxMinute: number
  price: number
  percentageAdd: number
  createdAt: string
  updatedAt: string
}

export interface HomeProps {
  plans: Array<PlanType>
}
