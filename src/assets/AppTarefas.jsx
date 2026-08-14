
import { useState } from "react";
import TarefasLista from "./TarefasLista";
import TarefasForm from "./TarefasForm";

const AppTarefas = () => {
const {tarefas, setTarefas} = useState([]);
const addTarefa = (tarefa) => {
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
    };
    setTarefas([...tarefas, novaTarefa])

    const addTarefa = (id, novoTexto) => {

    }

    const deleteTarefa = (id) => 

    return (
        <div>
            <h1>Keepão React</h1>
            <TarefasLista tarefas={tarefas}/>
            <TarefasForm onAddTarefa={addTarefa}/>
        </div>
    );
}
}

export default AppTarefas;