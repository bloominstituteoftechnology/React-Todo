import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)

  return (
    <div className="shopping-list">
    
      <button className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default Todo;
