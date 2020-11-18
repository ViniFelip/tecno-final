import axios from 'axios'

export const urlBase = {
    timeout: 30000,
    baseURL: 'http://tecno-start-api.herokuapp.com/v1/api'
    
}

export const apiPrivada = axios.create(urlBase)
export const apiPublica = axios.create(urlBase)

apiPrivada.interceptors.request.use(request => {
    request.headers = {
        Authorization: localStorage.getItem('usuarioLogado')
    }
    return request
})