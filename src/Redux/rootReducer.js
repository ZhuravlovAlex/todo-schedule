import { combineReducers } from "redux";
import { todoItemReducer } from "./todoItemReducer";

export const rootReducer = combineReducers({
	todoItem: todoItemReducer
})