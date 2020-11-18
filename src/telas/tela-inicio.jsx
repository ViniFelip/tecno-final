import { TecnoAlt } from '../componentes/alto'
import {Tube} from '../componentes/youtube'
import {VerTimes} from './listar-partida'
import '../css/fundo.css'
import {NovoTema} from '../componentes/titulos'
// import {Baixar} from '../componentes/download'

function TelaInicio() {
    return <div className="principal">
        
        <TecnoAlt />
        <Tube/>
        <NovoTema/>
        

        <VerTimes/>
        {/* <Baixar/> */}
    </div>

}

export default TelaInicio