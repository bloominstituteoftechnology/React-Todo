import React from "react";


const ToDo = props => {
  return (
    <ul>
      {props.todo.map(items => {
        return <li key={items.id}>{items.name}</li>;
      })}
    </ul>
  );
};

export { ToDo }