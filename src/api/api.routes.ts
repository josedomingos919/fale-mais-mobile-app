import api from './index'
import { CalcType } from './type'

export const getAllPlan = async () => {
  try {
    const response = await api.get('/product')
    return {
      data: response?.data || [],
    }
  } catch (err) {
    return {
      error: true,
      response: err,
      message: 'Não foi possivel carregar os planos!...',
    }
  }
}

export const getAllPrice = async () => {
  try {
    const response = await api.get('/price')
    return {
      data: response?.data || [],
    }
  } catch (err) {
    console.log( "teste=> " ,err)
    return {
      error: true,
      response: err,
      message: 'Não foi possivel carregar a tabela de preços!...',
    }
  }
}

export const getCalc = async ({
  origin,
  destination,
  duration,
  planId,
}: CalcType) => {
  try {
    const response = await api.post('/price/calc', {
      origin,
      destination,
      duration,
      planId,
    })

    return {
      data: response?.data || {},
    }
  } catch (err) {
    return {
      error: true,
      response: err,
      message: 'Não foi possivel carregar a tabela de preços!...',
    }
  }
}
