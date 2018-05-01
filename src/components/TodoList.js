import React from 'react';

const TodoList = props => {
    return (
      <ul>
        {props.todos.map(task => {
          return <li key={task.id}>{task.task}</li>
        })}
      </ul>
    );
};

export default TodoList;