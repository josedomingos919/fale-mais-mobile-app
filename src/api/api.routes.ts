import api from './index'

export const getAllPlan = async () => {
  try {
    const response = await api.get('/product')
    return response?.data || []
  } catch (err) {
    return {
      error: true,
      response: err,
    }
  }
}
