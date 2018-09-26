import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
    <React.Fragment>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </React.Fragment>
  )
}

export default TodoList
