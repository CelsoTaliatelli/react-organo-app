/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores,colaborador]);
    console.log(colaboradores);
  }

  return (
    <div>
        <Banner />
        <Formulario aoNovoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
