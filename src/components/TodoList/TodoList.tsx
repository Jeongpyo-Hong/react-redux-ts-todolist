import "./todoList.scss";
import TodoItem from "../TodoItem/TodoItem";
import { TodoParams } from "../../module/todos";

interface TodoListParams {
  todos: TodoParams[];
  toggleHandler: (id: string) => void;
  removeHandler: (id: string) => void;
}

const TodoList = ({ todos, toggleHandler, removeHandler }: TodoListParams) => {
  return (
    <div className="listContainer">
      <ul>
        {todos?.map((todo: any) => (
          <TodoItem
            todo={todo}
            toggleHandler={toggleHandler}
            removeHandler={removeHandler}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
