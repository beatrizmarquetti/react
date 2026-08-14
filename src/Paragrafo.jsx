<<<<<<< HEAD
import { useState} from "react"

const Paragrafo = (props) => {
    const [pontos, setPontos] = useState(0);

    const aumentarPontos = () => {
        setPontos(pontos + 1)
    }

    const diminuirPontos = () => {
          if (pontos > 0) 
            setPontos(pontos - 1)
    }

    return (
        <div>
            <p>{props.nome} tem {pontos} pontos.</p>
            <button onClick={aumentarPontos}>+</button>
            <button onClick={diminuirPontos}>-</button>
=======
import { useState } from "react"

const Paragrafo = (props) =>{

const [pontos, setPontos] = useState (0)

const aumentarpontos = ()=>{
        setPontos (pontos + 1)
     }

const diminuirPntos = ()=>{
    if (pontos >0)
        setPontos (pontos - 1);
     }

    return (
        <div>
            <p>{props.nome} tem {pontos} pontos.
                <button onClick={aumentarpontos}> +</button>
                <button onClick={diminuirPntos} > -</button>
            </p>
>>>>>>> 194615fe076f17a1ed1262253afe30e84b411f8a
        </div>
    );
}

<<<<<<< HEAD
export default Paragrafo;
=======
export default Paragrafo
>>>>>>> 194615fe076f17a1ed1262253afe30e84b411f8a
