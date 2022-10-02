import { combineReducers } from 'redux'
import todos from './TodoListReducer'
import register from './registerReduser'

export default combineReducers({
    todos,
    register
});