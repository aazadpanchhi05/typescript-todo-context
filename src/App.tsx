import React from "react";
import { Container } from "react-bootstrap";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./containers/Todos";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Container>
        <AddTodo />
        <Todos />
      </Container>
    </TodoProvider>
  );
}

export default App;
