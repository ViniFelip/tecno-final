import { apiPrivada, apiPublica } from '../api/index'

export async function perfil() {
    const response = await apiPrivada.get('/user/me')
    return response.data
}

export async function cadastrar(request) {
    const response = await apiPublica.post('/user', request)
    return response.data
}

export async function buscarTimes() {
    const response = await apiPrivada.get('/team')
    return response.data
}

export function criarTime(request) {
    const response = apiPrivada.post('/team', request)
    return response.data
}

export async function atualizarTime(request, id) {
    const response = await apiPrivada.put(`/team/${id}`, request)
    return response.data
}

export async function excluirTime(deletandoTime){
    apiPrivada.delete(`/team/${deletandoTime}`)

}

export async function verPartida() {
    const response = await apiPrivada.get('/match')
    return response.data
}

export async function criarPartida(request) {
    const response = await apiPrivada.post('/match', request)
    return response.data 
}