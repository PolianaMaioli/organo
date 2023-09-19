import './CampoTexto.css'

//props, que são as propriedades que esse componente recebeu.
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        // Nós pegamos o valor do que está sendo digitado com evento.target.value. O target é um evento do JavaScript.
        props.aoAlterado(evento.target.value)
        
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            {/* ficar "ouvindo" o input e toda vez que ele for alterado executar algo, então vamos fazer um onChange */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>

        </div>
    )
}

export default CampoTexto
