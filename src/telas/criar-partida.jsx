
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { criarPartida } from '../servicos/register'
import '../css/cad-partida.css'

export function Partida() {

    const history = useHistory()
    const [partida, setPartida] = useState()

    function handleChange(event) {
        const copy = { ...partida }
        copy[event.target.name] = event.target.value
        setPartida(copy)

    }

    async function criar() {
        await criarPartida(partida)
        history.push('/')
        
    }


    return <div className="cadpart">

        <div className="todoinp">
       <div className="inpone"><input type="datetime-local" onChange={handleChange} placeholder="Horário" name="datetime" /></div> 
       <div className="inptwo"><input type="number" onChange={handleChange} placeholder="Id do time A" name="idTeamA" /></div> 
        <p>vs</p>
        <div className="inptree"><input type="number" onChange={handleChange} placeholder="id do time B" name="idTeamB" /></div>

        <div>
            <button onClick={criar} type="button">criar</button>
        </div>
        </div>
    </div>
}