import { useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { RootState } from "../module";

const TodoListContainer = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
export default TodoListContainer;
