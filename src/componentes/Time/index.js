import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({colaboradores,id,nome,corPrimaria, aoDeletar,mudarCor}) => {
    return(
        //props.colaboradores.length > 0 && <section>
        (colaboradores.length > 0) ? <section className="time" style={{backgroundImage:'url(/imagens/fundo.png)',backgroundColor:hexToRgba(corPrimaria,'0.6')}}>
            <input onChange={evento => mudarCor(evento.target.value, id)} type='color' value={corPrimaria} className='input-color'></input>
            <h3 style={{borderColor:corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map(
                colaborador => 
                    <Colaborador
                        key={colaborador.id}
                        corDeFundo={corPrimaria} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={() => aoDeletar(colaborador.id)}
                        />
                )
            }
            </div>
            
        </section> : ''
    )
}

export default Time;