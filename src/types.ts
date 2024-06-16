export interface Todo {
  id: number;
  text: string;
}

export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}
