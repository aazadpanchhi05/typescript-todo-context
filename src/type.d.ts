interface ITodo {
    title: string,
    description: string,
}

type ContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void,
    removeTodo: (todo: ITodo) => void
}