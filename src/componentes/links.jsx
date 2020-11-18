// import {Link} from 'react-router-dom'
import '../css/links.css'
import github from '../img/github.png'
export function Links(){
    return <div className="linka">


        <button className="btnlink">Links</button>
        <div className="rotas">
        <a href="https://www.youtube.com/channel/UCplhFe3_cvAbpMqePNWDqlQ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" alt="" width="30px" />
        </a>

        <a href="https://www.facebook.com/vinicius.felipe.106902">
            <img src="https://mltjbtwhcfxp.i.optimole.com/XGiR4mbiL4w/w:auto/h:auto/q:auto/https://portal.b2commerce.com.br/wp-content/uploads/2019/01/logo-face.png" alt="" width="30px" />
        </a>

        <a href="https://github.com/ViniFelip">
            <img src={github} alt="" width="25px" />
        </a>
        </div>

    </div>
}