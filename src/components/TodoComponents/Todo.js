import React from "react";

const Todo = props => {
    console.log(props)
  return (
    <div
      className={`item${props.item.purchased ? " purchased" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  )
}

export default Todo
