// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const LineThrough = event-> {
  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = "none";
  }
  else {
    event.target.style.textDecoration = "line-through";
  }
  const ToDoList = props => {
    return {
<ul>
    <li onClick={LineThrough}key={newToDo+index}>{newToDo}</li>
  })}
  </ul>
};
};

export default ToDoList;
