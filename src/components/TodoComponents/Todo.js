import React from 'react'

const Todo = (props) => {
  // {console.log("TODO PROPS", props)}
  return (
    <div className="todo">
      <h2
        style={props.props.completed ? {textDecoration: "line-through"} : {textDecoration: "none"} }
        onClick={() => props.toggleComplete(props.props.id)}
        className="todo-item"
      >{props.props.task}</h2>
    </div>
  )
} 

export default Todo;