import React from "react";

const DeleteButton = props => {
  return (
<button onClick={props.handleDelete}>Delete all completed tasks</button>
  )
}
export default DeleteButton;
