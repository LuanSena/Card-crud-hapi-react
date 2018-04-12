import Axios from 'axios'
import config from '../config'

export default class WebService {
  constructor () {
    this.baseUrl = config.BASE_API_URL
  }
  async get (url) {
    const res = await Axios.get(url)
    const data = await res.data
    return data
  }

  async post (url, body) {
    const res = await Axios.post(url, body)
    return res
  }

  async patch (url, body) {
    const res = await Axios.patch(url, body)
    return res
  }

  async delete (url, body) {
    const res = await Axios.delete(url, body)
    return res
  }

  async getCards () {
    return this.get(`${this.baseUrl}/v1/card`)
  }

  async getCard (cardId) {
    return this.get(`${this.baseUrl}/v1/card/${cardId}`)
  }

  async postCard (body) {
    return this.post(`${this.baseUrl}/v1/card`, body)
  }

  async patchCard (cardId, body) {
    return this.patch(`${this.baseUrl}/v1/card/${cardId}`, body)
  }

  async deleteCard (cardId) {
    return this.delete(`${this.baseUrl}/v1/card/${cardId}`)
  }
}