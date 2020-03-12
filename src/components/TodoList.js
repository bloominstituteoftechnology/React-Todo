// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Tasks from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.tasks.map(tasks => (
        <Tasks
          key={tasks.id}
          tasks={tasks}
          toggleFinished={props.toggleFinished}
        />
      ))}
      <button className='completed-btn' onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
};

export default TodoList;