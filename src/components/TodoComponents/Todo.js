import React from "react";

const ListItemRenderer = props => {
  const {task} = props.taskItems;
  return (
    <p>{task}</p>
  )
}

export default ListItemRenderer;