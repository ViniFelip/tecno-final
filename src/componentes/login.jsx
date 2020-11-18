import { Link } from 'react-router-dom'
import fazerlogin from '../img/fazerlogin.png'
import '../css/login.css'

export function BtnLogin() {
    return <div className="logcad">

        
        <Link to="/login">
            <img className="login" src={fazerlogin} alt=""/>
        </Link>

        <Link to="/cadastro">
            <button className="btcadastrar" type="button">cadastrar</button>
        </Link>
 
 

        
    </div>





}


