import axios from 'axios'

const api = axios.create({
    baseURL: 'https://poowoo-devradar-backend.herokuapp.com/',
})

export default api