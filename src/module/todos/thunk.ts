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

export const getTodo = (): ThunkAction<void, RootState, null, TodosActions> => {
  return async (dispatch) => {
    const { request, success, failure } = getTodosAsync;
    dispatch(request());
    try {
      const res = await instance.get<TodoState>("/todos");
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };
};

export const createTodo = (
  todo: TodoParams
): ThunkAction<void, RootState, null, TodosActions> => {
  return async (dispatch) => {
    const { request, success, failure } = createTodosAsync;
    dispatch(request());
    try {
      const res = await instance.post<TodoState>("/todos", todo);
      console.log(res);
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };
};

export const toggleTodo = (
  id: string
): ThunkAction<void, RootState, null, TodosActions> => {
  return async (dispatch) => {
    const { request, success, failure } = toggleTodosAsync;
    dispatch(request());
    try {
      const res = await instance.post<TodoState>("/todos", id);
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };
};

export const removeTodo = (
  id: string
): ThunkAction<void, RootState, null, TodosActions> => {
  return async (dispatch) => {
    const { request, success, failure } = removeTodosAsync;
    dispatch(request());
    try {
      const res = await instance.post<TodoState>("/todos", id);
      dispatch(success(res.data));
    } catch (e) {
      if (axios.isAxiosError(e)) dispatch(failure(e));
    }
  };
};
