import React from "react";

const List = props => {
  return (
    <ul>
      {props.toDo.map(item => (
        <li key={item.listItem}>{item.listItem}</li>
      ))}
    </ul>
  );
};

export default List;
