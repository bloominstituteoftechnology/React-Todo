// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from '../components/Todo';

const TodoList = props => {
  const { todos } = props;
  return (
    <div className='todo-list '>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          toggleCompleted={props.toggleCompleted}
          todo={todo}
        />
      ))}
      <button
        className='clear-btn'
        onClick={(e) => props.clearCompleted(e)}
      >
        Clear Completed
        </button>
    </div>
  );
};

export default TodoList;
