import React from "react";

const Todo = props => {

  return (

    <div className={`item${props.item.finished ? 'purchases' : ''}`}
    onClick={() => props.toggleFinished(props.item.id)}>
      <p>{props.item.name}</p>
      </div>
  )
}

export default Todo;