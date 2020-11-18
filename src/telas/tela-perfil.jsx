import { useEffect, useState } from 'react'
import { sair } from '../servicos/user'
import { useHistory } from 'react-router-dom'
import { perfil } from '../servicos/register'
import '../css/perfil.css'

function TelaPerfil() {

    const history = useHistory()
    const [state, setState] = useState()

    useEffect(async () => {
        setState(await perfil())
    }, [])

    async function saindo() {
        await sair(state)
        history.push('/login')
    }



    return <div className="perfila">

        {/* <button type="button" onClick={saindo}>Sair</button> */}

        {state ? (
            <div className="meuperfil">
                <img src={state.photo} alt="avatar" className="pfphoto" />
                <h1>{state.name}</h1>
                <div><span className="spanone">E-mail: {state.email}</span> </div>
                <div><span className="spantwo">Contato: {state.phone}</span> </div>
                <div><span className="spantree">Descrição: {state.description}</span></div>
            </div>
        ) : (
                <p>carregando...</p>
            )}


    </div>



}



export default TelaPerfil
