import React from 'react'
import './Todo.css'

const Todo = ({ task, id, completed, completeTodo }) => (
  <p
    className="todo"
    onClick={() => completeTodo(id)}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {task}
  </p>
)

export default Todo
