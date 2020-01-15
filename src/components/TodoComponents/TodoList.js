import React from 'react';
import Todo from './Todo';


const TodoList = ({ errands, toggleCompleted }) => {
  

  return (
    <div>{errands.map(item => (
      <Todo
        key={item.id}
        item={item}
        toggleCompleted={toggleCompleted}
      />
    ))}
    </div>
);
};

export default TodoList