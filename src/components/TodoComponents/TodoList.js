// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//This receives the Todos arrays and iterates over the list generating a new <Todo /> for each element in the array.
 
import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)



  return (
    <div className="shopping-list">
    
      {props.data.map(item => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button>Clear Purchased</button>
    </div>
  );
};

export default TodoList;
