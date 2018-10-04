import React from "react";

const List = props => {
  return (
    <div>
      <ul>
        {props.toDo.map((item, index) => (
          <li key={index} id={index} onClick={props.crossOff} className={item.done ? 'checked':'unchecked'}>
            {item.listItem}
          </li>
        ))}
      </ul>
      <button onClick={props.removeChecked}>Clean up</button>
    </div>
  );
};

export default List;
