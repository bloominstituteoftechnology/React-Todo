import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, completeTodo }) => (
  <div>{todos.map((todo, i) => <Todo {...todo} key={i} completeTodo={completeTodo} />)}</div>
)

export default TodoList
