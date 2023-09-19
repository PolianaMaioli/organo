import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    
  /*
  uma maneira dela só ser retornada se a lista de colaboradores for maior do que zero.
    props.colaboradores.length > 0 &&, para essa expressão e caso > 0 seja true, ele vai retornar o segundo parâmetro da condição.
    Podemos utilizar tbm o operador ternário como o exemplo abaixo.*/
    return (       

        (props.colaboradores.length >0) ? <section className='time' style={css }>
            <h3 style={{borderColor:  props.corPrimaria}}> {props.nome} </h3>
            <div className="colaboradores">
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>

        </section>
        : ''
    )
}


export default Time