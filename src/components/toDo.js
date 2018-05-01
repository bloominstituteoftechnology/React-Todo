import React from "react";


const ToDo = props => {
  return (
    <ul>
      {props.todo.map(items => {
        return <li key={items.name}>{items.id}</li>;
      })}
    </ul>
  );
};

export { ToDo }