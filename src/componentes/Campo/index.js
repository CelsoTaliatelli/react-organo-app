import './Campo.css';

const Campo = (props) => {

    const tipoCampo = props.type ? props.type : 'text';
    
    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${tipoCampo}`}>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                id={props.label}
                type={tipoCampo} 
                value={props.valor} 
                onChange={aoDigitado} 
                placeholder={props.placeholder} 
                required={props.obrigatorio} 
                />
        </div>
    )
}
export default Campo;