import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

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
    data: TodoParams[] | any;
    error: any | null;
  };
}

export type TodosActions = ActionType<typeof actions>;
