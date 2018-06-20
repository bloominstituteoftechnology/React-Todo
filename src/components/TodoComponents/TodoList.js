// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  // stateless because it's only concern is to display JSX elements
  // bandslist responsibility: iterate over items and generate an array of //JSX elements
  return <div>{props.todos.map((todo) => <Todo key={todo.id} singleTodo={todo} />)}</div>;
};

export default TodoList;
