const TarefasLista = ([ tarefas ]) => {
    return (
        <ul>
            {tarefas.map((tarefa) => {
                <TarefaItem key={tarefa.id} tarefa={tarefa} />
            })}
        </ul>
    );
}
export default TarefasLista;