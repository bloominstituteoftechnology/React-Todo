import React from 'react';
import './Todo.css';

const Todo = (props) => {

  // render(props) {
  return(
  <div 
  onClick={() => props.toggleItem(props.todo.id)} 
  className={`todo${props.todo.completed ? " completed" : ""}`}
  >
    <p>{props.todo.task}</p>
  </div>
  )
// }
}

export default Todo;