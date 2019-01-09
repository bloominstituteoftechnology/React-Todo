import React from 'react';

function ToDoForm(props) {
  console.log('To Do Form is re-rendering');
  return (
    <form onSubmit={props.addNewToDoItem}>
      {/* this input "controlled" input */}
      <input
        value={props.toDoItem}
        type="text"
        name="toDoItem"
        placeholder="A Thing To Do"
        onChange={props.handleChanges}
      />
      <button type="submit">Add To Do Item</button>
      <button>Clear Completed</button>
    
    </form>
  );
}

export default ToDoForm;
