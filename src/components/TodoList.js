import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => (
        <Todo 
          todo={todo} 
          key={todo.id} 
          toggleCompleted={props.toggleCompleted} 
        />
      ))}
    </div>
  );
}

export default TodoList;