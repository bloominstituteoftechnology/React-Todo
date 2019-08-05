//This takes in the todo data and displays the task to the screen
import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = props => {
    console.log('props', props.item.task)
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)

  return (
    // <div onClick={()=>props.toggleItem(props.item.id)}>
    
    //  <p>{props.item.name}</p>
    // </div>
    <p>{props.item.task}</p>
  );
};

export default Todo;
