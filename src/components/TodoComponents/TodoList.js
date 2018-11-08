import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return(
    <div>
      {props.todos.map(toDoInMap => (
        <Todo
        // handleToggleComplete={props.handleToggleComplete}
          key={toDoInMap.id}
          toDoInProps={toDoInMap}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
