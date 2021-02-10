import React from "react";
import Todo from "react";

const TodoList = (props) => {
  return (
    <div>
      {props.list.map((task) => (
        <Todo toggleDone={props.toggleDone} key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList