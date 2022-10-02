import React from "react";
import { addTodo } from "../../store/action/addTodo";

function AddTodo({ todos, register, dispatch }) {

	let input;
	const submitHandler = e => {
		e.preventDefault();
		const text = input.value.trim();
		if (!text) return

		dispatch(addTodo(text, todos.length + 1));
		input.value = '';
	}

	return !register ? <div> </div> :
		<form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
			<input type={'text'} ref={node => input = node} />
			<button type="submit">Add Todo</button>
		</form>
}

export default AddTodo;