import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return(
    <ul>
      {props.todos.map(task => {
        return <Todo key={task.id} task={task} completedTask={props.completedTask} />
      })}
    </ul>
  )
}

export default TodoList;