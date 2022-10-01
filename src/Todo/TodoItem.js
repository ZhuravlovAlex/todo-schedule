import React, { useContext } from "react";
import PropTypes from "prop-types"
import Context from "../context";
import styles from "./TodoItem.module.css"


function TodoItem({ todo, index, onChange }) {
	const { removeTodo } = useContext(Context)
	const classes = []

	if (todo.completed) {
		classes.push('done')
	}

	return (
		<li className={styles.item} >
			<span className={classes.join(' ')}>
			<strong className={styles.posNum}>{index + 1}</strong>
				&nbsp;
				<input 
					className={styles.itemInput}
					type="checkbox" 
					style={styles.input} 
					onChange={() => onChange(todo.id)} 
					checked={todo.completed}
				/>
				
				{todo.title}
			</span>

			<button className={styles.deleteTodo} 
				onClick={removeTodo.bind(null, todo.id)}>
				&times;
			</button>
		</li>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired
}

export default TodoItem