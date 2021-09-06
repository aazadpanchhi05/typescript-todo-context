import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TodoContext } from "../context/TodoContext";

export const AddTodo = () => {

  const { saveTodo } = React.useContext(TodoContext) as ContextType;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const todo = {
      title: title,
      description: description,
    };
    setTitle("");
    setDescription("");
    saveTodo(todo);
  };

  return (
    <Form className="mt-5">
      <Form.Group className="mb-3">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};
