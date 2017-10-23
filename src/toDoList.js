import React from 'react';

const toDoList = props => {
  return (
    <div>
      <input type="text"/>
      <button onClick={props.addToDo}>Submit ToDo</button>
      <ul>
          {
            // map the array, then display each <li> element
          }
      </ul>
    </div>
  );
};



export default toDoList;
