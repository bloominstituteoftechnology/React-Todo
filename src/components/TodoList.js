import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      <div className='toDoList'>
        {props.toDoArray.map(toDo => (
          <Todo key={toDo.id} toDo={toDo} toggleTodo={props.toggleTodo} />
        ))}
      </div>

      <button className='clear-btn' onClick={props.clearTodo}>
        Clear Todo
      </button>
    </div>
  );
};

export default TodoList;
