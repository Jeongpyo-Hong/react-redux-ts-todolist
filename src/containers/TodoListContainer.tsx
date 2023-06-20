import { useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { RootState } from "../module";
import { useEffect } from "react";
import { getTodo, removeTodo, toggleTodo } from "../module/todos";
import { useDispatch } from "react-redux";

const TodoListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.todos.todos
  );
  const dispatch = useDispatch();

  const toggleHandler = (id: string): void => {
    dispatch(toggleTodo(id));
    dispatch(getTodo());
  };

  const removeHandler = (id: string): void => {
    dispatch(removeTodo(id));
    dispatch(getTodo());
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  if (loading) <div>로딩중...</div>;

  if (error) return <div>{error}</div>;

  return (
    <TodoList
      todos={data}
      toggleHandler={toggleHandler}
      removeHandler={removeHandler}
    />
  );
};
export default TodoListContainer;
