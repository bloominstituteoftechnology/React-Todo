import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <div>{todos.map((todo, i) => <Todo {...todo} key={i} />)}</div>
)

export default TodoList
