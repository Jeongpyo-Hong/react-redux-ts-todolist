import { useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { RootState } from "../module";

const TodoListContainer = () => {
  const { data } = useSelector((state: RootState) => state.todos.todos);

  return (
    <div>
      <TodoList todos={data} />
    </div>
  );
};
export default TodoListContainer;
