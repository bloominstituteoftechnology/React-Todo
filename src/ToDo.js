import React from "react";

// renders individual todo items
const ToDo = props => {
  console.log(props);
  return (
    <div>
      {/* <p>{props.todoList}</p> */}
      {props.todoList.map((item, index) => (
        <div key={item + index}> {item} </div>
      ))}
    </div>
  );
};

export default ToDo;
