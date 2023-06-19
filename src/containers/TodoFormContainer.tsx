import React, { useState } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import uuid from "react-uuid";
import { createTodo } from "../module/todos/thunk";

const TodoFormContainer = () => {
  let id = uuid();
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({
      id,
      text,
      done: false,
    });
    setText("");
  };

  return (
    <TodoForm text={text} onChange={onChange} submitHandler={submitHandler} />
  );
};

export default TodoFormContainer;
