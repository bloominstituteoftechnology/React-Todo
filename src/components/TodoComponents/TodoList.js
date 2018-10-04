import React from "react";
import Todo from "./Todo";

const List = props => (
  <section className="list">
    <h1>Todo List</h1>
    <ul>
      {props.toDo.map(item => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.task}
          handleCompleted={props.handleCompleted}
          style={props.style}
          strikethrough={item.completed ? props.strikethrough : null}
        />
      ))}
    </ul>
  </section>
);

export default List;
