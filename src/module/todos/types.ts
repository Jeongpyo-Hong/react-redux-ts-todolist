import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "../../module/index";
import thunk from "redux-thunk";

/**
 * 타입
 */
export interface TodoParams {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: {
    loading: boolean;
    data: TodoParams[] | any | [];
    error: string | null;
  };
}

export const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export type TodosActions = ActionType<typeof actions>;
export type AppDispatch = typeof store.dispatch;
