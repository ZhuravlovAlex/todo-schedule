import React from "react";
import TodoItem from "./TodoItem";

const styles = {
	ul: {
		listStyle: 'none',
		margin: 40,
		padding: 0,
	}
}

function TodoList({ todos, register, toggleTodo, deleteTodo }) {
	return !register ? <div></div> :
		<ul style={styles.ul}>
			{todos.filter(todo => !todo.completed).map((todo, index) => {
				return <TodoItem
					todo={todo}
					key={todo.id}
					index={index}
					onChange={toggleTodo}
					onDelete={deleteTodo}
				/>
			})}
		</ul>

}

export default TodoList;