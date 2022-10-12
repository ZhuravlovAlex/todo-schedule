import React from "react";
import TodoItem from "../Todo/TodoItem";
import {DoneProps} from "../../types"
import styles from "./Done.module.css"


function Done(props: DoneProps) {
    const {todos, toggleTodo} = props;
    return (
        <div className={styles.bodyDone}>
            <ul style={styles.ul} >
                {todos.filter(todo => todo.completed).map((todo, index) => {
                    return <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={toggleTodo}
                    />
                })}
            </ul>
        </div>
    )
}

export default Done;