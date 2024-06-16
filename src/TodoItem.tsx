// src/TodoItem.jsx
// Add FC
import React, { FC } from "react";
import { Todo } from "./types";

// Add interface TodoItemProps
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

// function TodoItem({ todo, deleteTodo }){
const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
