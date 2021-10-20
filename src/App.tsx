import React from "react";
import { Container } from "react-bootstrap";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./containers/Todos";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div>
        <p></p>
        <h2 style={{color: "Blue",display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p>ToDo List</p>
        </h2>
      </div>
      <Container>
        <AddTodo />
        <Todos />
      </Container>
    </TodoProvider>
  );
}

export default App;
