import React, { useState } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import uuid from "react-uuid";
import { createTodo, getTodo } from "../module/todos/thunk";
import { useDispatch } from "react-redux";

const TodoFormContainer = () => {
  let id = uuid();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id,
      text,
      done: false,
    };
    dispatch(createTodo(newTodo));
    dispatch(getTodo());
    setText("");
  };

  return (
    <TodoForm text={text} onChange={onChange} submitHandler={submitHandler} />
  );
};

export default TodoFormContainer;
