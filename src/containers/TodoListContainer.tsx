import { useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { RootState } from "../module";
import { useEffect } from "react";
import { getTodo } from "../module/todos";
import { useDispatch } from "react-redux";

const TodoListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.todos.todos
  );
  const dispatch = useDispatch();
  console.log(data, loading, error);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  if (loading) return <div>로딩중...</div>;

  if (error) return null;

  return (
    <div>
      <TodoList todos={data} />
    </div>
  );
};
export default TodoListContainer;
