import "./todoItem.scss";

const TodoItem = ({ todo }: any) => {
  return (
    <li>
      {todo?.done ? (
        <div className="done">{todo?.text}</div>
      ) : (
        <div>{todo?.text}</div>
      )}
      <button className="doneBtn">✔️</button>
      <button className="removeBtn">❌</button>
    </li>
  );
};

export default TodoItem;
