import '../css/timevs.css'
import moment from 'moment'

export function ListaPartida({ datetime, teamA, teamB }) {
    return <div className="div">

        <table className="lista">
            <span>vs</span>
            <tr className="pack">

                <div className="vailista">

                    <th>

                        <img className="imga" src={teamA.photo} alt="Foto time A" />

                    </th>

                </div>

                <th>
                    <img className="imgb" src={teamB.photo} alt="Foto time B" />
                </th>

            </tr>

            <tr >
                <p className="date">
                    {moment.utc(datetime).format('MMMMM/do/YYYY HH:mm:ss a')}
                </p>
            </tr>

        </table>
    </div>
}