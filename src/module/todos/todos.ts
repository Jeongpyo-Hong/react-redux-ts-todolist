import { createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { TodoState } from "./types";
import { TodosActions } from "./types";

/**
 * 유틸 함수 생성
 */

export const utils = {
  initial: {
    loading: false,
    data: [
      {
        id: 0,
        text: "테스트1",
        done: true,
      },
      {
        id: 1,
        text: "테스트2",
        done: false,
      },
    ],
    error: null,
  },

  loading: () => ({
    loading: true,
    data: null,
    error: null,
  }),

  success: (payload: TodoState) => ({
    loading: true,
    data: payload,
    error: null,
  }),

  error: (error: any) => ({
    loading: true,
    data: null,
    error: error,
  }),
};

/**
 * 초기값
 */
const initialState = {
  todos: utils.initial,
};

/**
 * 리듀서
 */
const todos = createReducer<TodoState, TodosActions>(initialState, {
  // GET
  [actions.GET_TODOS_LOADING]: (state) => ({
    ...state,
    todos: utils.loading(),
  }),
  [actions.GET_TODOS_SUCCESS]: (state, action) => ({
    ...state,
    todos: {
      loading: false,
      data: action.payload,
      error: null,
    },
  }),
  [actions.GET_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: utils.error(action.payload),
  }),

  // CREATE
  [actions.CREATE_TODOS_LOADING]: (state) => ({
    ...state,
    todos: utils.loading(),
  }),
  [actions.CREATE_TODOS_SUCCESS]: (state, action) => ({
    ...state,
    todos: {
      loading: false,
      data: [...state.todos.data, action.payload],
      error: null,
    },
  }),
  [actions.CREATE_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: utils.error(action.payload),
  }),
});

export default todos;
