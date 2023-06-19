import "./todoList.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }: any) => {
  return (
    <div className="listContainer">
      <ul>
        {todos?.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
