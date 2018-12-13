// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <li>
      {props.items.map(items => (<Todo items = {props.items} id = {props.id} complete = {props.complete} />))};
    </li>
  );
};

export default TodoList;
