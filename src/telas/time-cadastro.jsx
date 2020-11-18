import {criarTime} from '../servicos/register'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import '../css/time-cadastro.css'
function CadastroTime (){

    const history = useHistory()
    const [criar, setCriar] = useState()

    function handleChange(event){
        const copy = {...criar}
        copy[event.target.name] = event.target.value
        setCriar(copy)
    }

    function salvar (){
        criarTime(criar)
        history.push('/listadetimes')

    }


    return <div className="divcad">
        <form className="cadtime">
            <div><input onChange={handleChange} placeholder="Nome" type="name" name="name"/></div>
            <div><input onChange={handleChange} placeholder="Descrição" type="text" name="description"/></div>
            <div><input onChange={handleChange} placeholder="Membros" type="number" name="members"/></div>
            <div><input onChange={handleChange} placeholder="Imagem" type="photo" name="photo"/></div>
            
            <div>
                <button type="button" onClick={salvar}>Salvar</button>
            </div>

        </form>
    </div>
}

export default CadastroTime