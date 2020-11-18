import {useState, useEffect} from 'react'
import {buscarTimes, verPartida} from '../servicos/register'
import { Time } from '../componentes/time-campo'
import {ListaPartida} from './part-time'
export function VerTimes(){


    const [times, setTimes] = useState([])
    const [partidas, setPartidas] = useState([])

    useEffect(async () => {
        const promisePartidas = verPartida()
        const promiseTimes = buscarTimes()
        const respostaTimes = await promiseTimes
        const respostaPartidas = await promisePartidas
        // setTimes(respostaTimes.content)
        setPartidas(respostaPartidas.content)
        
        
    }, [])

    return <div>

        <div>
        {/* {times.map(
            (time) => (<Time key={time.id} time={time} />
            ))} */}

{
            partidas.map(
                (partida) => (<ListaPartida datetime={partida.datetime} teamA={partida.teamA} teamB={partida.teamB} />))
        }


    </div>
    </div>
}