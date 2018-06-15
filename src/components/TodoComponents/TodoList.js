// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  let lists = props.lestItems;
  let search = props.searchString.trim().toLowerCase();
  if (search.length > 0) {
    lists = lists.filter(user => return user.task.toLowerCase().match(search));
  }
  return ( <ul> {
      lists.map(item => {
        return <Todo key = {item.id} item = {item} toggleComplete={props.toggleComplete} />;
      })
    } </ul>
  );
};

export default TodoList;
