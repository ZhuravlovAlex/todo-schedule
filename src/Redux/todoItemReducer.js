import { CREATE_ITEM } from "./Types"

const initialState = {
	todoItem: []
}

export const todoItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_ITEM:
			return { ...state, todoItem: state.todoItem.concat(action.payload)}

		default: return state
	}

}