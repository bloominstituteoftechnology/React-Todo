// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todoList">
      {props.data.todoData.map(e => {
        return (
          <Todo
            id={e.id}
            text={e.task}
            completed={e.completed}
            toggleComplete={props.toggleComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;