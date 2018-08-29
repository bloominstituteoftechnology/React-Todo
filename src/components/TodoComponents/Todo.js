import React from 'react'
import './Todo.css'

const Todo = (props) => {
  return (
    <div className="Todo">
      {props.item.completed ? 
        <div><input type="checkbox" defaultChecked /><span className="strike">{props.item.task}</span></div>
        : <div><input type="checkbox" /><span>{props.item.task}</span></div>
      }
    </div>
  )
}

export default Todo