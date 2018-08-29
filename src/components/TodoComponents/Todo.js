import React from 'react'
import './Todo.css'

const Todo = (props) => {
  return (
    <div className="Todo">
      {props.item.completed ? 
        <div><input type="checkbox" checked={props.item.isChecked} onChange={(e) => props.addComplete(e, props.reactKey)} /><span className="strike">{props.item.task}</span></div>
        : <div><input type="checkbox" checked={props.item.isChecked} onChange={(e) => props.addComplete(e, props.reactKey)} /><span>{props.item.task}</span></div>
      }
    </div>
  )
}

export default Todo