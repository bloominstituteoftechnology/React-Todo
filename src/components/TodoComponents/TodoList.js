import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div className="TodoList">
      <TodoForm />
      {props.list.map(item => {
        return <Todo item={item} key={item.id} />
      })}
    </div>
  )
}

export default TodoList