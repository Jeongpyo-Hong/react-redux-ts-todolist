import { TodoParams } from "../../module/todos";
import "./todoItem.scss";

interface TodoItemParams {
  todo: TodoParams;
  toggleHandler: (id: string) => void;
  removeHandler: (id: string) => void;
}

const TodoItem = ({ todo, toggleHandler, removeHandler }: TodoItemParams) => {
  return (
    <li>
      {todo?.done ? (
        <div className="done">{todo?.text}</div>
      ) : (
        <div>{todo?.text}</div>
      )}
      <button onClick={() => toggleHandler(todo.id)} className="doneBtn">
        ✔️
      </button>
      <button onClick={() => removeHandler(todo.id)} className="removeBtn">
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
