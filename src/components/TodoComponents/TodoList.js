import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todoArray.map((todo) => <Todo task={todo.task} key={todo.id} />)}
      </ul>
    </div>
  )
}

export default TodoList
