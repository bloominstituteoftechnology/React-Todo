import React from 'react';

import Todo from './Todo';
//this function is holding Todo, which is each of the todos that are created
//assinging a key to each of the items, key ={todo.id}
//each id will become a signiture key for each of the todo. 

const TodoList = props => {
  return (
    <div className="list">
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