import React from "react";
import { Button, Card } from "react-bootstrap";

interface Props {
  todo: ITodo;
  removeTodo: (todo: ITodo) => void;
}

export const Todo = ({ todo, removeTodo }: Props) => {
  const updateTodo = () => {
    removeTodo(todo);
  };

  return (
    <Card className="my-5 bg-dark">
      <Card.Body>
        <Card.Title className="text-white">{todo.title}</Card.Title>
        <Card.Text className="text-white">{todo.description}</Card.Text>
        <Button variant="danger" onClick={updateTodo} className="mt-2">
          Done
        </Button>
      </Card.Body>
    </Card>
  );
};
