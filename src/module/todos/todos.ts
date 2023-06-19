import { createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { TodoState } from "./types";
import { TodosActions } from "./types";

/**
 * 초기값
 */
const initialState: TodoState = {
  todos: {
    loading: false,
    data: [],
    error: null,
  },
};

/**
 * 리듀서
 */
const todos = createReducer<TodoState, TodosActions>(initialState, {
  // 조회
  [actions.GET_TODOS_LOADING]: (state, action) => ({
    ...state,
    todos: {
      loading: true,
      data: null,
      error: null,
    },
  }),
  [actions.GET_TODOS_SUCCESS]: (state, action) => ({
    ...state,
    todos: {
      loading: false,
      data: [],
      error: null,
    },
  }),
  [actions.GET_TODOS_ERROR]: (state, action) => ({
    ...state,
    todos: {
      loading: false,
      data: null,
      error: action.payload,
    },
  }),
});

export default todos;
