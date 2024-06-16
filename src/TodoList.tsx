// src/TodoList.jsx
// Add FC
import React, { FC } from "react";
import { Todo } from "./types";
import TodoItem from "./TodoItem";

// Add interface TodoListProps
interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

// function TodoList({ todos, deleteTodo }){
// return
const TodoList: FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
