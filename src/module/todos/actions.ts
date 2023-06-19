import { createAsyncAction } from "typesafe-actions";
import { TodoState } from "./types";
import { AxiosError } from "axios";

export const GET_TODOS_LOADING = "todos/GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "todos/GET_TODOS_ERROR";
export const CREATE_TODOS_LOADING = "todos/GET_TODOS_CREATE_LOADING";
export const CREATE_TODOS_SUCCESS = "todos/GET_TODOS_CREATE_SUCCESS";
export const CREATE_TODOS_ERROR = "todos/GET_TODOS_CREATE_ERROR";
export const TOGGLE_TODOS_LOADING = "todos/GET_TODOS_TOGGLE_LOADING";
export const TOGGLE_TODOS_SUCCESS = "todos/GET_TODOS_TOGGLE_SUCCESS";
export const TOGGLE_TODOS_ERROR = "todos/GET_TODOS_TOGGLE_ERROR";
export const REMOVE_TODOS_LOADING = "todos/GET_TODOS_REMOVE_LOADING";
export const REMOVE_TODOS_SUCCESS = "todos/GET_TODOS_REMOVE_SUCCESS";
export const REMOVE_TODOS_ERROR = "todos/GET_TODOS_REMOVE_ERROR";

export const getTodosAsync = createAsyncAction(
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
)<undefined, TodoState, AxiosError>();

export const createTodosAsync = createAsyncAction(
  CREATE_TODOS_LOADING,
  CREATE_TODOS_SUCCESS,
  CREATE_TODOS_ERROR
)<undefined, TodoState, AxiosError>();

export const toggleTodosAsync = createAsyncAction(
  TOGGLE_TODOS_LOADING,
  TOGGLE_TODOS_SUCCESS,
  TOGGLE_TODOS_ERROR
)<undefined, TodoState, AxiosError>();

export const removeTodosAsync = createAsyncAction(
  REMOVE_TODOS_LOADING,
  REMOVE_TODOS_SUCCESS,
  REMOVE_TODOS_ERROR
)<undefined, TodoState, AxiosError>();
