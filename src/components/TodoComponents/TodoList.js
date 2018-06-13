// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = props => {
  return (
    <ul>
    {props.todo.map(item => {
      return <li key={item}>{item}</li>
    })}
    </ul>
  );
}

export default TodoList
