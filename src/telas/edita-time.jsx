
import {useHistory, useParams} from 'react-router-dom'
import { useState } from 'react'
import { atualizarTime } from '../servicos/register'



function EditandoTime() {

    const history = useHistory()
    const [altera, setAltera] = useState({})
    const params = useParams()
    

    async function alterado(event) {
        event.preventDefault()
        await atualizarTime(altera, params.id)
        history.push('/listadetimes')
        
  }

    function handleChange(event) {
        const copy = {...altera}
        copy[event.target.name] = event.target.value
        setAltera(copy)
    }

   


    return <div>
        <form>
            <label>Nome</label>
            <div><input onChange={handleChange} type="text" name="name" /></div>
            <label>Membros</label>
            <div><input onChange={handleChange} type="number" name="members" /></div>
            <label>Descrição</label>
            <div><input onChange={handleChange} type="text" name="description" /></div>
            <label>Imagem</label>
            <div><input onChange={handleChange} type="text" name="photo" /></div>

            <button type="button" onClick={alterado}>Salvar</button>

        </form>
    </div>
}

export default EditandoTime