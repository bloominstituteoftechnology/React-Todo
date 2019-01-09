// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import TodoNote from './TodoNote';

function TodoList(props) {
  // do more stuff here
  return (
    <div>
      {props.toDoDataList.map((toDo, index) => {
        return <TodoNote toDo={toDo} key={index} />;
      })}
    </div>
  );
  // this won't get touched
}

export default TodoList;
