import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css";

function App () {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos) {
        return JSON.parse(savedTodos)
    } else {
        return [];
    }
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])


  const toggleTodo = todoId => {
      console.log("toggle")
      const updatedTodos = todos.map(todo => {
          if(todoId === todo.id) {
            return {...todo, completed : !todo.completed}
          }
          return todo
      })
      setTodos(updatedTodos)
  }

  const addTodo = newTodo => {
      setTodos(
          [...todos, {
              task: newTodo.trim(),
              id: Math.random(),
              completed: false
          }]
      )
  }

  const clearCompleted = () => {
    setTodos(
          todos.filter(todo => !todo.completed)
      )
  }
    return (
      <div className="app">
          <h1>To-do List</h1>
        <TodoForm 
            addTodo={addTodo}
            clearCompleted={clearCompleted}
             />
        <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo}
            />
      </div>
    );
}

export default App;
