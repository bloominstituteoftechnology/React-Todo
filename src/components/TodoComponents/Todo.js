import React from 'react';

const Todo = ({ item, toggleCompleted }) => {
  
  return (
    < div
    onClick={()=> toggleCompleted(item.id)}>
      <p>{item.task}</p>
    </div >
  );
};

export default Todo;