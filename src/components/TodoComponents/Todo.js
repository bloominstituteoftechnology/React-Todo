import React from "react";

const Todo = props => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;

// const Item = props => {
//   return (
//     <div
//       className={`item${props.item.purchased ? " purchased" : ""}`}
//       onClick={e => props.toggleItem(props.item.id)}
//     >
//       {props.item.name}
//     </div>
//   );
// };
