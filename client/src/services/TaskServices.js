import Client from './api'

export const GetTasks = async () => {
  try {
    const res = await Client.get('/tasks')
    return res.data
  } catch (error) {
    throw error
  }
}
