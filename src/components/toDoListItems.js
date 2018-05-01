import React from 'react';


const toDoListItems = props => {
    return (
      <ul>
        {props.toDos.map(toDo => {
          return <li key={toDo.id}>{toDo.name}</li>;
        })}
      </ul>
    );
  };
  
  export { toDoListItems };
  