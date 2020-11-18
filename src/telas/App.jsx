import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TelaLogin from './tela-login'
import TelaPerfil from './tela-perfil'
import TelaCadastro from './tela-cadastro'
import ListarTimes from './times-lista'
import CadastroTime from './time-cadastro'
import EditandoTime from './edita-time'
import TelaInicio from './tela-inicio'
import {Logo} from '../componentes/logo'
import {TecnoAlt} from '../componentes/alto'
import {VerTimes} from './listar-partida'
import { Partida } from './criar-partida'
import {Fundo} from '../componentes/fundo'
function App() {
    return <div>
        <Router>
        <Logo/>
        <TecnoAlt/>

            <Switch>
                <Route path="/cadastro">
                    <TelaCadastro />
                </Route>
                <Route path="/vertimes">
                    <VerTimes/>
                </Route>

                <Route path="/partida">
                    <Partida/>
                    
                </Route>
                

                <Route path="/login">
                    <TelaLogin />
                </Route>

                <Route path="/perfil">
                    <TelaPerfil />
                </Route>

                <Route path="/listadetimes">
                    <ListarTimes />
                </Route>

                <Route path="/cadastrodotime">
                    <CadastroTime />
                </Route>

                <Route path="/alterarTime/:id">
                    <EditandoTime />
                </Route>

                <Route exact path="/">
                    <TelaInicio />
                    
                </Route>

            </Switch>
            {/* <Rodape/> */}

        </Router>
        

    </div>
}

export default App