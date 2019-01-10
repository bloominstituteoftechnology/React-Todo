import React from "react"

function Todo(props) {
  return <div className={`todo-item ${props.todo.completed}`}
  onClick={() => props.changeCompletion(props.todo.id)}>{props.todo.task}</div>
}

export default Todo