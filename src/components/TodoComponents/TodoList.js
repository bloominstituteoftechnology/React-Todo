import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='shopping-list'>
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className='clear-button' onClick={props.clearFinished}>
        Clear Finished
      </button>
    </div>
  );
};

export default TodoList;
