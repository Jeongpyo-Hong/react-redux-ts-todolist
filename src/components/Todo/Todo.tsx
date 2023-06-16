import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

import "./todo.scss";

const Todo = () => {
  return (
    <div className="container">
      <div className="innerContainer">
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
