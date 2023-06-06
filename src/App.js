/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [times,setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])


  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4();
    colaborador.favorito = false;
    //debugger
    setColaboradores([...colaboradores,colaborador]);
  }

  const aoNovoTimeAdicionado = (time) => {
    time.id = uuidv4();
    console.log(time);
    setTimes([...times, time]);
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const favoritarColaborador = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      console.log(colaborador);
      return colaborador;
    }))
  }

  const mudarCorDotime  = (cor,id) => {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div>
        <Banner />
        <Formulario 
          aoNovoTimeCadastro={time => aoNovoTimeAdicionado(time)}
          aoNovoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
          times={times.map(time => time.nome)}
        />
        {
          times.map(
            time => 
              <Time 
                key={time.id} 
                nome={time.nome} 
                id={time.id}
                corPrimaria={time.cor}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                mudarCor={mudarCorDotime}
                aoDeletar={deletarColaborador}
                aoFavoritar={favoritarColaborador}
              />)
        }
        <Rodape />
    </div>
  );
}

export default App;
