import "./ListaSuspensa.css";

//DropDown
// Todo o array [] JavaScript pode fazer esse métodos .map. Para cada item da lista ele vai retornar um array novo manipulado.
// porque se fosse só o forEach ele ia percorrer e fazer algo. O map, não, ele percorre, faz algo e devolve uma nova lista transformada. É a grande diferença de um mapa para um forEach.
// O map executa e cria uma nova caixa, um novo array com itens já tranformados, mapeados por uma transformação.
const ListaSuspensa = (props) =>{
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}

            </select>

        </div>
    )

}   
export default ListaSuspensa