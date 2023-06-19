import "./todoItem.scss";

const Todo = () => {
  return (
    <li>
      <div>내용</div>
      <button className="doneBtn">✔️</button>
      <button className="removeBtn">❌</button>
    </li>
  );
};

export default Todo;
