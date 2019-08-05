// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)

  return (
    <div className="shopping-list">
    
      <button className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;
