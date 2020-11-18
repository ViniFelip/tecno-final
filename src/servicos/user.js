import {apiPublica} from '../api'

export async function entrar (request){
    const response = await apiPublica.post('/login', request)
    localStorage.setItem('usuarioLogado', response.data.token)
}

export async function sair(){
    localStorage.removeItem('usuarioLogado')
}