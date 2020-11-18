import {Link} from 'react-router-dom'
import '../css/alt.css'
// import github from '../img/github.png'
import {Links} from '../componentes/links'
import {Cabecario} from './cabeçario-edit'

export function TecnoAlt() {
    return <div className="fund">

      {/* <Link to="/login">
      <button>login</button>

      
      </Link>  
      <Link to="/cadastro">
      <button>cadastrar-se</button>

      
      </Link>  
      <Link to="/perfil">
      <button>Perfil</button>

      
      </Link>   */}
       <Cabecario/>
        <Links/>


    </div>
}