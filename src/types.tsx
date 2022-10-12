import { toggleTodo } from "./store/action/toggleTodo";

type Todo = {
	id: number;
	completed: boolean;
	title: string
}

type toggleTodoFunc = (id: number) => {type: string; id: number};

type DoneProps = {
	todos: Todo[],
	toggleTodo: toggleTodoFunc
}

type RegisterAction = {
	type: string;
}

type TodoAction = {
	type: string;
	id: number;
	title: string;
}

export {
	DoneProps,
	RegisterAction,
	TodoAction,
	Todo
}