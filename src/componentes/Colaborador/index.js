import './Colaborador.css';

const Colaborador = ({nome, imagem, cargo}) => {
    return(
        <div className='colaborador' key={nome}>
            <div className='cabecalho'>
                <img src={imagem} alt="imagem do membro do time" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador