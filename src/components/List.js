import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <ListItem
          key={todo.id}
          removeTodo={props.removeTodo}
          handleToggle={props.handleToggle}
          todo={todo}/>
      ))}
    </ul>
  );
};

export default List;
