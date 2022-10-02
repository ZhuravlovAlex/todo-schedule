import React from "react";
import styles from "./App.module.css"
import Registration from "../../containers/Registration";
import TodoList from "../../containers/TodoList";
import Done from "../../containers/Done";
import AddTodo from '../../containers/AddTodo';

function App() {
  return (
    <div>
      <div className={styles.body}>
        <h2>React Todo schedule</h2>
        <Registration />
        <AddTodo />
        <TodoList />
      </div>
      <Done />
    </div>
  )
}

export default App;

