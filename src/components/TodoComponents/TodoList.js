// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return ( <ul> {
      props.listItems.map(item => {
        return <Todo key = {item.id} item = {item} onClick={props.toggleComplete} />;
      })
    } </ul>
  );
};

export default TodoList;
