import { useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { RootState } from "../module";
import { useEffect } from "react";
import { getTodo } from "../module/todos";
import { useDispatch } from "react-redux";

const TodoListContainer = () => {
  const { data } = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTodo());
  });

  return (
    <div>
      <TodoList todos={data} />
    </div>
  );
};
export default TodoListContainer;
