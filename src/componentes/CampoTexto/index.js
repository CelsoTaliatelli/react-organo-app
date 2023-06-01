import './CampoTexto.css';

const CampoTexto = (props) => {

    
    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label for={props.label}>{props.label}</label>
            <input
                id={props.label} 
                value={props.valor} 
                onChange={aoDigitado} 
                placeholder={props.placeholder} 
                required={props.obrigatorio} 
                />
        </div>
    )
}
export default CampoTexto;