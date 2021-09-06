import React from "react";
import { Todo } from "../components/Todo";
import { TodoContext } from "../context/TodoContext";

export const Todos = () => {
  const { todos, removeTodo } = React.useContext(TodoContext) as ContextType;

  return (
    <>
      {todos.map((todo: ITodo, index: number) => (
        <Todo key={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </>
  );
};
