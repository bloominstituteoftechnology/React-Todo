// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div>
      <ul>{props.items.map(item => <Todo key={item.task} task={item.task}>{item.task}</Todo>)}</ul>
    </div>
  );




}
export default TodoList;
