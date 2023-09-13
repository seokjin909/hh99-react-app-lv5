import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodos, deleteTodos, getTodos, updateTodos } from "../api/todos";

export default function useTodos() {
  const queryClient = useQueryClient();
  const todosQuery = useQuery(["todos"], getTodos);
  const addTodo = useMutation((todo) => addTodos(todo), {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  const updateTodo = useMutation((data) => updateTodos(data), {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  const deleteTodo = useMutation((id) => deleteTodos(id), {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  return { todosQuery, addTodo, updateTodo, deleteTodo };
}
