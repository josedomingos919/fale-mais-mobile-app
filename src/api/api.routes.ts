import api from './index'

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
    return {
      error: true,
      response: err,
      message: 'Não foi possivel carregar a tabela de preços!...',
    }
  }
}
