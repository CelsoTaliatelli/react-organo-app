import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    console.log(props);
    const fundo = {backgroundColor:props.corSecundaria};
    const borda = {borderColor:props.corPrimaria};
    return(
        //props.colaboradores.length > 0 && <section>
        (props.colaboradores.length > 0) ? <section className="time" style={fundo}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(
                colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        />
                )
            }
            </div>
            
        </section> : ''
    )
}

export default Time;