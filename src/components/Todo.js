import React from 'react';

const Todo = (props) => {

  // render(props) {
  return(
  <div onClick={() => props.toggleItem(props.todo.id)}>
    <p>{props.todo.task}</p>
  </div>
  )
// }
}

export default Todo;