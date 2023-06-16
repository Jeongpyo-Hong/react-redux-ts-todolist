import { ActionType, createAction, createReducer } from "typesafe-actions";

/**
 * 타입
 */
interface TodoParams {
  id: number;
  text: string;
  done: boolean;
}
interface TodoState {
  todos: TodoParams[];
}

/**
 * 액션타입
 */
const CREATE = "todo/CREATE";
const REMOVE = "todo/REMOVE";
const TOGGLE = "todo/TOGGLE";

/**
 * 액션생성함수
 */
const create = createAction(CREATE)<TodoParams>();
const remove = createAction(REMOVE)<number>();
const toggle = createAction(TOGGLE)<number>();

/**
 * 액션객체타입
 */
const actions = { create, remove, toggle };
type TodoActions = ActionType<typeof actions>;

/**
 * 초기값
 */
const initialState: TodoState = {
  todos: [],
};

/**
 * 리듀서
 */
const todo = createReducer<TodoState, TodoActions>(initialState, {
  [CREATE]: (state, action) => ({
    ...state,
    todos: [...state.todos, action.payload],
  }),
  [REMOVE]: (state, action) => ({
    ...state,
    todos: state.todos.filter((todo: TodoParams) => todo.id !== action.payload),
  }),
  [TOGGLE]: (state, action) => ({
    ...state,
    todos: state.todos.map((todo: TodoParams) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  }),
});

export default todo;
