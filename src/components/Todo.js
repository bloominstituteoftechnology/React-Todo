import React from 'react';

function Todo(props) {
  return (
    <div>
      {props.todos.map((todo,i) => {
        if(todo.complete) {
          return <li onClick={props.toggleTask.bind()} key={i}><del>{todo.task}</del></li>
        } else {
          return <li onClick={props.toggleTask.bind()} key={i}>{todo.task}</li>
        }
      })}
    </div>
  )
}

export default Todo;