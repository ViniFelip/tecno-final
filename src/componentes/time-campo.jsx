import {useHistory} from 'react-router-dom'
import '../css/timefoto.css'
import {Link} from 'react-router-dom'
import {excluirTime} from '../servicos/register'

export function Time({ time }) {

    const history = useHistory()

    async function excluir (){
        await excluirTime(time.id)
        history.push('/listadetimes')
        alert('Tem certeza que deseja excluir?')
    }

    return <div className="editatime">

<Link to={`/alterarTime/${time.id}`}>
            <button className="btneditone" type="button">Editar</button>
        </Link>

        <button className="btnedittwo" onClick={excluir}>Excluir</button>
    

        <img src={time.photo} alt="Logo" className="timeFoto" />
        <h3>{time.name}</h3>

        <p>{time.members} Membros</p>
        


        

        

    </div>
}