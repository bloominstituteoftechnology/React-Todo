// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
import React from 'react';

export default function TodoForm(props) {
  return (
    <div>
      <input type="text" value={props.typeValue} onChange={(event) => props.onTaskTypeChange(event)}/>
      <button onClick={() => props.onAddClick()}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
}
