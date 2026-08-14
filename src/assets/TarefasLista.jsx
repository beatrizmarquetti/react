const TarefasLista = ({tarefas, onEditTarefa, onDeleteTarefa}) => {
    return (
        <ul>
            {tarefas.map((tarefa) => {
                <TarefaItem key={tarefa.id} tarefa={tarefa} onEditTarefa={onEditTarefa} onDeleteTarefa={onDeleteTarefa} />
            })}
        </ul>
    );
}


export default TarefasLista;