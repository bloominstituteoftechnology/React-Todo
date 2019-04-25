import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <>
      <ul>
        {props.list.map(task => {
          return (
            <ToDo
              toggle
              task={task}
              key={task.id}
              completed={task.completed}
              toggleToComplete={props.toggleToComplete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;

//this might not have a functional purpose yet.
