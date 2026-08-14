import { useState } from "react"

const CaixaTexto = () =>{

    const [texto, setTexto] = useState('');
    const gerenciarTexto = (event)=>{
        setTexto(event.target.value)

    }

    return(
        <div>
            <h3> <input type="text" value={texto} onInput={gerenciarTexto}/></h3>
            <p>Você digitou:{texto}</p>
        </div>
    )

}

export default CaixaTexto