import React from 'react'
import './Todo.css'

const Todo = (props) => {
  return (
    <div className="Todo">
      <input type="checkbox" id="check-off" checked={props.item.completed} onChange={(e) => props.addComplete(e, props.reactKey)} />
      <label className={props.item.completed ? "strike" : ""}htmlFor="check-off">{props.item.task}</label>
    </div>
  )
}

export default Todo
