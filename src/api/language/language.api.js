import { instance } from '../base.api'

const model = 'user-languages'

const languageApi = {
  getByUserId: (user_id) => {
    return instance.get(`/${model}/user/${user_id}`)
  },

  save: (data) => {
    return instance.post(`/${model}`, data)
  },

  delete: (id) => {
    return instance.delete(`/${model}/${id}`)
  },
}

export default languageApi
