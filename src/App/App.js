import React from "react";
import TodoList from "../Todo/TodoList";
import Context from "../context";
import styles from "./App.module.css"
import Registration from "../Regisration/Registration";


const AddTodo = React.lazy(() => import('../AddTodo'))

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Create React App Todo'},
    { id: 2, completed: false, title: 'Add Redux to React App'},
    { id: 3, completed: false, title: 'Add TS to project'},
    { id: 4, completed: false, title: 'Make some Tests'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className={styles.body}>

        <h2>React Todo schedule</h2>

        <Registration/>
        
        <React.Suspense >
          <AddTodo onCreate={addTodo} />
        </React.Suspense> 
          {todos.length ? 
            (<TodoList todos={todos} onToggle={toggleTodo} /> )
            : (<p>All Todos are done</p>)
          }
          
      </div>
    </Context.Provider>
  )
}

export default App;
