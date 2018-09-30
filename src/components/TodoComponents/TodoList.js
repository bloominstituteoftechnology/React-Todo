import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(task => {
        return (
          <Todo task = {task} key={task.id} handleToggleComplete={props.handleToggleComplete} />
        )

      })}
    </div>
  )
};

export default TodoList;