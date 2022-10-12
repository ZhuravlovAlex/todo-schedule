import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css"


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