import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Todo toggleHandler={props.toggleHandler} key={task.id} task={task} />
      ))}
      <button className='clear-butt'>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
