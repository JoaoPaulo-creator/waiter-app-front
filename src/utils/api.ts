import axios from 'axios'

export const localHost = '192.168.1.7'
export const port = '3001'
export const localHostWithPort = `${localHost}:${port}`

export const api = axios.create({
  baseURL: `http://${localHostWithPort}`
})