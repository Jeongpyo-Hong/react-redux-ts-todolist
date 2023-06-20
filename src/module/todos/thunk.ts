import axios from "axios";
import instance from "../../api/todos";
import { TodoParams, TodoState } from "./types";
import {
  getTodosAsync,
  createTodosAsync,
  toggleTodosAsync,
  removeTodosAsync,
} from "../todos/actions";

export const getTodo = (): any => async (dispatch: any) => {
  const { request, success, failure } = getTodosAsync;
  dispatch(request());
  try {
    const res = await instance.get<TodoState>("/todos");
    dispatch(success(res.data));
  } catch (e) {
    if (axios.isAxiosError(e)) dispatch(failure(e));
  }
};

export const createTodo =
  (todo: TodoParams): any =>
  async (dispatch: any) => {
    const { request, success, failure } = createTodosAsync;
    dispatch(request());
    try {
      await instance.post<TodoState>("/todos", todo);
      dispatch(success(todo));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };

export const toggleTodo =
  (id: string): any =>
  async (dispatch: any) => {
    const { request, success, failure } = toggleTodosAsync;
    dispatch(request());
    try {
      await instance.patch<TodoState>(`/todos/${id}`, id);
      dispatch(success(id));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };

export const removeTodo =
  (id: string): any =>
  async (dispatch: any) => {
    const { request, success, failure } = removeTodosAsync;
    dispatch(request());
    try {
      await instance.delete<TodoState>(`/todos/${id}`);
      dispatch(success(id));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };
