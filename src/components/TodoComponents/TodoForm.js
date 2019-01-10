import React from 'react';

function ToDoForm(props) {
  console.log('To Do Form is re-rendering');
  return (
    <form>
      <input
        value={props.toDoItem}
        type="text"
        name="toDoItem"
        placeholder="Put It On the List!"
        onChange={props.handleChanges}
      />
      <button onClick={props.addNewItem} type="submit">Add To Do Item</button>
      <button>Clear Completed</button>
    
    </form>
  );
}

export default ToDoForm;
