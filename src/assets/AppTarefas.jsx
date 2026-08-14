
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

    const deleteTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

    const editTarefa = (id, novoTexto) => {
        setTarefas(tarefas.map((tarefa) => {
            if (tarefa.id === id) {
                return { ...tarefa, texto: novoTexto };
            }
            return tarefa;
        }));
    };

    return (
        <div>
            <h1>Keepão React</h1>
            <TarefasLista tarefas={tarefas} onEditTarefa={editTarefa} onDeleteTarefa={deleteTarefa}/>
            <TarefasForm onAddTarefa={addTarefa}/>
        </div>
    );
}
}

export default AppTarefas;