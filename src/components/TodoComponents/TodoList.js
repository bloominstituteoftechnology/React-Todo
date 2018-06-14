import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todoArray.map((todo) => (
          <Todo
            task={todo.task}
            key={todo.id}
            handleClick={props.handleClick}
            todo={todo}
            style={todo.completed ? { textDecoration: 'line-through' } : null}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
