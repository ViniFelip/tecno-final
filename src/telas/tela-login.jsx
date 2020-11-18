import {useState} from 'react'
import {Link, useHistory } from 'react-router-dom'
import {entrar} from '../servicos/user'
import '../css/tela-login.css'

function TelaLogin (){

    const history = useHistory()
    const [user, setUser] = useState({})

    function handleChange(event){
        const copy = {...user}
        copy[event.target.name] = event.target.value
        setUser(copy)
    }

    async function entrando(evento){
        evento.preventDefault()
       await entrar(user)
        history.push('/')
    }



    return <div className="login">
        
        <form className="card">
            <div className="inputone"><input onChange={handleChange} type="email" placeholder="E-mail" name="username" id="email"/></div>
            <div className="inputtwo"><input onChange={handleChange} type="password" placeholder="Senha" name="password" id="senha"/></div>
       
            <button className="btnone" onClick={entrando}>Entrar</button>

            <Link to="/cadastro">
                <button className="btntwo" type="button">Cadastrar-se</button>
            </Link>
       
        </form>
    </div>

}

export default TelaLogin