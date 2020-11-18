import { useState } from 'react'
import { cadastrar } from '../servicos/register'
import { useHistory } from 'react-router-dom'
import '../css/cadastro.css'

function TelaCadastro() {

    const history = useHistory()
    const [user, setUser] = useState({})

    function handleChange(event) {
        const copy = { ...user }
        copy[event.target.name] = event.target.value
        setUser(copy)
    }

    async function save() {

        await cadastrar(user)
        history.push('/login')
    }



    return <div className="telacadastro">
        <form className="cadastro">
            <div><input onChange={handleChange} placeholder="Nome" type="name" name="name" id="cadname" /></div>
            <div><input onChange={handleChange} placeholder="E-mail" type="email" name="email" id="cademail" /></div>
            <div><input onChange={handleChange} placeholder="Senha" type="password" name="password" id="cadpassword" /></div>
            <div><input onChange={handleChange} placeholder="Descrição" type="text" name="description" id="caddescription" /></div>
            <div><input onChange={handleChange} placeholder="Telefone" type="tel" name="phone" id="cadphone" /></div>
            <div><input onChange={handleChange} placeholder="Imagem" type="text" name="photo" id="cadphoto" /></div>

            <div>
                <button type="button" onClick={save}>Salvar</button>
            </div>


        </form>
    </div>
}

export default TelaCadastro