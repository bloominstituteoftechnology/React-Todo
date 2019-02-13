import React from 'react';

export default function TodoForm({ 
    typeValue, onTaskTypeChange, onAddClick, onEnter, onClearClick
}) 
{
  return (
    <div>
      <input
        type="text"
        value={typeValue}
        onChange={event => onTaskTypeChange(event)}
        onKeyPress={event => onEnter(event)}
      />
      <button onClick={() => onAddClick()}>Add Todo</button>
      <button onClick={() => onClearClick()}>Clear Completed</button>
    </div>
  );
}
