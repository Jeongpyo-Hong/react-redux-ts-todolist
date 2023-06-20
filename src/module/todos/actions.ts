import { createAsyncAction } from "typesafe-actions";
import { TodoParams, TodoState } from "./types";
import { AxiosError } from "axios";

export const GET_TODOS_LOADING = "todos/GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "todos/GET_TODOS_ERROR";
export const CREATE_TODOS_LOADING = "todos/CREATE_TODOS_LOADING";
export const CREATE_TODOS_SUCCESS = "todos/CREATE_TODOS_SUCCESS";
export const CREATE_TODOS_ERROR = "todos/CREATE_TODOS_ERROR";
export const TOGGLE_TODOS_LOADING = "todos/TOGGLE_TODOS_LOADING";
export const TOGGLE_TODOS_SUCCESS = "todos/TOGGLE_TODOS_SUCCESS";
export const TOGGLE_TODOS_ERROR = "todosTOGGLE__TODO__ERROR";
export const REMOVE_TODOS_LOADING = "todos/REMOVE_TODOS_LOADING";
export const REMOVE_TODOS_SUCCESS = "todos/REMOVE_TODOS_SUCCESS";
export const REMOVE_TODOS_ERROR = "todos/REMOVE_TODOS_ERROR";

export const getTodosAsync = createAsyncAction(
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
)<undefined, TodoState, AxiosError>();

export const createTodosAsync = createAsyncAction(
  CREATE_TODOS_LOADING,
  CREATE_TODOS_SUCCESS,
  CREATE_TODOS_ERROR
)<undefined, TodoParams, AxiosError>();

export const toggleTodosAsync = createAsyncAction(
  TOGGLE_TODOS_LOADING,
  TOGGLE_TODOS_SUCCESS,
  TOGGLE_TODOS_ERROR
)<undefined, string, AxiosError>();

export const removeTodosAsync = createAsyncAction(
  REMOVE_TODOS_LOADING,
  REMOVE_TODOS_SUCCESS,
  REMOVE_TODOS_ERROR
)<undefined, string, AxiosError>();
