import React from 'react';

function Todo(props) {
  return(
    <p className={`item ${props.listItem.completed ? ` completed` : ``}`}>{props.listItem.item}</p>
  );
}

export default Todo;