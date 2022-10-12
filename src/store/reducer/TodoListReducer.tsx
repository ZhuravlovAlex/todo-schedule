import { Todo, TodoAction } from "../../types"

const todos = (state: Todo[] = [], action: TodoAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default todos;