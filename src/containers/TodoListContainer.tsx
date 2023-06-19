import { useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { RootState } from "../module";
import { useEffect } from "react";
import { getTodo } from "../module/todos";

const TodoListContainer = () => {
  const { data } = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    getTodo();
  });

  return (
    <div>
      <TodoList todos={data} />
    </div>
  );
};
export default TodoListContainer;
