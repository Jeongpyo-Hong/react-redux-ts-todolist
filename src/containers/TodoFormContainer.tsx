import React, { useState, useCallback } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import uuid from "react-uuid";
import { createTodo } from "../module/todos/thunk";

const TodoFormContainer = () => {
  let id = uuid();
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = useCallback(() => {
    createTodo({
      id,
      text,
      done: false,
    });
  }, [text]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
    setText("");
  };

  return (
    <TodoForm text={text} onChange={onChange} submitHandler={submitHandler} />
  );
};

export default TodoFormContainer;
