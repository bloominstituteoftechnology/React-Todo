import React from 'react';

const TodoList = props => {
  return (
    <div>
      <h2>Todo App</h2>
      {props.todos.map((todo, index) => (
        <div key={todo + index}>{todo}</div>
      ))}
    </div>
  );
};

// const CheckOff = props => {
//   return (
    
//   )
// }

export default TodoList;
