import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times =[
        'Programação',
        'Data Science',
        'DevOps'
    ];
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite seu nome" />
                <ListaSuspensa label="Times" itens={times}/>
            </form>
        </section>
    );
}

export default Formulario;