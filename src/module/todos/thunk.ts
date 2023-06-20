import axios from "axios";
import instance from "../../api/todos";
import { TodoParams, TodoState, TodosActions } from "./types";
import { RootState } from "../";
import { ThunkAction } from "redux-thunk";
import {
  createTodosAsync,
  getTodosAsync,
  removeTodosAsync,
  toggleTodosAsync,
} from "../todos/actions";
import { Dispatch } from "redux";

export const getTodo = (): any => async (dispatch: Dispatch) => {
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
  async (dispatch: Dispatch) => {
    console.log("aaa");
    const { request, success, failure } = createTodosAsync;
    dispatch(request());
    try {
      const res = await instance.post<TodoState>("/todos", todo);
      console.log("bbb");
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };

export const toggleTodo =
  (id: string): ThunkAction<void, RootState, null, TodosActions> =>
  async (dispatch: Dispatch) => {
    const { request, success, failure } = toggleTodosAsync;
    dispatch(request());
    try {
      const res = await instance.post<TodoState>("/todos", id);
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };

export const removeTodo =
  (id: string): ThunkAction<void, RootState, null, TodosActions> =>
  async (dispatch: Dispatch) => {
    const { request, success, failure } = removeTodosAsync;
    dispatch(request());
    try {
      const res = await instance.post<TodoState>("/todos", id);
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };
