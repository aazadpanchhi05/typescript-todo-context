import React, { useState } from "react";

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const saveTodo = (todo: ITodo) => {
    const newTodo = {
      title: todo.title,
      description: todo.description,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo: ITodo) => {
    setTodos(todos.filter((x) => x !== todo));
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
