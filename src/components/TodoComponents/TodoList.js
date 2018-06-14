import React from "react";
import "./Todo.css";
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return <Todo todo={todo}
                     key={index}
                     number={(index + 1).toString()}
                     toggleCompleted={props.toggleCompleted} />;
      })}
    </div>
  );
};

export default TodoList;
