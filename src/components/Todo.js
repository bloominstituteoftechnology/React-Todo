import React from 'react';

const Todo = props => {
  const styles = props.todo.completed ? { opacity: 0.2 } : { opacity: 1.0 }
  return (
    <div style={styles}>
      <button>x</button>&nbsp;
      <button onClick={props.toggleCompleted(props.todo.id)}>✓</button>&nbsp;&nbsp;
      {props.todo.text}
    </div>
  )
}

export default Todo;