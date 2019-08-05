import React from 'react';

import Todo from './Todo';
import TodoList from './TodoList';

const TodoForm = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)

  return (
    <form onSubmit={``}>
    <input
      type="text"
      value={``}
      name="item"
      onChange={``}
    />
    <button>Add</button>
  </form>
  );
};

export default TodoForm;
