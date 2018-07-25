// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo.js';
import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      {props.array.map(item => <Todo task={item.task} />)}
    </div>
  )
}

export default TodoList;
