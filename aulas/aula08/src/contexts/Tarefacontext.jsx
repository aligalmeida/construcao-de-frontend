import { createContext, useState } from "react";


const TarefaContext = createContext();

function TarefaProvider(props) {
    const [tarefas, setTarefas] = useState(["Estudar react", "Fazer a prática"]);

    const incluir = (tarefa) => {
       setTarefas([...tarefas, tarefa]);
    }

    const remover = (tarefa) => {
        setTarefas(tarefas.filter((item) => item != tarefa));
    }

    const contexto = {tarefas, incluir, remover}


    return (
    <TarefaContext.Provider value={contexto}>
        {props.children}
    </TarefaContext.Provider>
        );
    }

export { TarefaContext, TarefaProvider };