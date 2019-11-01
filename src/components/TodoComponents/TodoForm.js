import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type='text' name='todo' placeholder='Add Task' value={props.value} onChange={props.handleChangeTask}>
      </input>
      <button onClick={props.handleAddItem}>Add to List</button>
      <button onClick={props.handleClearPurchase}>Clear Purchase</button>
    </form>
  );
};

export default TodoForm;
