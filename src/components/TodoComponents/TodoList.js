import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
const TodoList = props => {
  console.log(props);
  return (
    <div>
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