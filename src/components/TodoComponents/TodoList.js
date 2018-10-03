import React from 'react'
import Todo from './Todo'
import './Todo.css'

const TodoList = ({ todos, completeTodo }) => (
  <div className="todo-list">
    {todos.map((todo, i) => (
      <Todo {...todo} key={i} completeTodo={completeTodo} />
    ))}
  </div>
)

export default TodoList
