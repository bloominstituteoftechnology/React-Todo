import React from "react"
import Todo from "./Todo"

const TodoList = props => {
  console.log(props)
  return (
    <div>
      {props.todoList.map(item => {
        console.log("ran TodoList.map", item)
        return (
          <Todo key={item.todo} item={item} toggleTodo={props.toggleTodo} />
        )
      })}
    </div>
  )
}

export default TodoList
