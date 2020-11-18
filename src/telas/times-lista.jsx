import { useState, useEffect } from 'react'
import { Time } from '../componentes/time-campo'
import { buscarTimes } from '../servicos/register'

function ListarTimes() {

    
    const [times, setTimes] = useState([])

    useEffect(async () => {
        const linetime = await buscarTimes()
        setTimes(linetime.content)
    }, [])

    

    return <div>
        {times.map(
            (time) => (<Time key={time.id} time={time} />
            ))}


    </div>

}

export default ListarTimes