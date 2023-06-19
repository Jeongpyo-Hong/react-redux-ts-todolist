import "./todoList.scss";
import Todo from "../TodoItem/TodoItem";
import { TodoState } from "../../module/todos/types";

const TodoList = ({ todos }: TodoState) => {
  return (
    <div className="listContainer">
      <ul>
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
