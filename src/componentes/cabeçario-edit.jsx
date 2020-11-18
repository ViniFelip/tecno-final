import { useState, useEffect } from 'react'
import { perfil } from '../servicos/register'
import { Link } from 'react-router-dom'
import { sair } from '../servicos/user'
import Logo from '../img/logo.png'
import {  AiOutlineHome } from 'react-icons/ai'
import { RiLogoutBoxLine, RiRegisteredLine } from 'react-icons/ri'
import '../css/cabeçario.css'

export function Cabecario() {

    const [state, setState] = useState()

    useEffect(async () => {
        setState(await perfil())
    }, [])

    return <div className="editcab" >
        {state ? (

            <div>
                <Link to="/perfil">
                    <img className="user" src={state.photo} alt="Foto do usuário" />
                </Link>

               

                <Link to="/">
                <button className="buttons" className="bntinicio"><AiOutlineHome/></button>
            </Link>

                <Link to="/login">
                    <button className="btnsair" onClick={sair}><RiLogoutBoxLine /></button>

                </Link>
                <Link to="/listadetimes">
                    <button className="btnsair" >Times</button>

                </Link>
                <Link to="/cadastrodotime">
                    <button className="btnsair" ><RiRegisteredLine/></button>

                </Link>


            </div>

        ) : (<div>

            

            <Link to="/login">
                <button className="buttons" className="b1">Conectar</button>
            </Link>

            <Link to="/cadastro">
                <button className="buttons" >Cadastrar-se</button>
            </Link>
        </div>
            )}
    </div>
}

