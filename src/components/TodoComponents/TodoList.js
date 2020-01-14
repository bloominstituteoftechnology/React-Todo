import React from 'react';
import { todoStyle } from '../../Styles/FormStyles';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todos" style={ todoStyle }>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;