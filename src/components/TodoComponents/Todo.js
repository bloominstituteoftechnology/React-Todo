import React from 'react'
import "./Todo.css";

Const Todo = props => {
    return (
      <div className="Todo">
        <img src={props.student.img} alt={props.student.name} />
        <div className="student-info">
          <h3>{props.student.name}</h3>
          <p>
            <strong>Identity:</strong> {props.student.identity}
          </p>
          <p>
            <strong>Age:</strong> {props.student.age}
          </p>
          <p>
            <strong>Best Friends:</strong> {props.student.bestFriend}
          </p>
        </div>
      </div>
    );
  };
  
  export default Todo;