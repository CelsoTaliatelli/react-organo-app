import { AiFillCloseCircle, AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({id,nome, imagem, cargo,favorito,corDeFundo,aoDeletar, aoFavoritar}) => {

    const favoritar = (id) => {
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return(
        <div className='colaborador' key={id}>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={aoDeletar} 
            />
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt="imagem do membro do time" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito ? 
                    <AiFillHeart  {...propsFavorito} color='#ff0000'/> : 
                    <AiOutlineHeart  {...propsFavorito} />}
                </div>
            </div>
        </div>
    );
}

export default Colaborador