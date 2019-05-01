import React from "react";
import Identity from "./Identity";

/*
props is an object
props has a student property 
*/

const Todo = props => {
  return (
    <div className="todo-card">
      <img src={props.todo.img} alt="" />
      <div className="todo-info">
        <h3>{props.todo.name}</h3>
        <Identity todo={todo.student} />
        <p>
          <strong>Age:</strong> {props.todo.age}
        </p>
        <p>
          <strong>Best Friends:</strong> {props.todo.bestFriend}
        </p>
      </div>
    </div>
  );
};

export default Todo;

/*

1. import React from 'react'
2. create a functional component
3. export default functional component
4. return some JSX

*/
