import React from 'react'
import Todo from './Todo'
import './Todo.css'

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.list.map(item => {
        return <Todo item={item} key={item.id} reactKey={item.id} addComplete={props.addComplete}/>
      })}
    </div>
  )
}

export default TodoList