// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';

const ToDoList = props => {
  return (
      <div>
        {props.Todos.map(todo => {
            return <Todo key={Math.random()}todo={tasks} />;
        })}
       </div>
  );
};

export default TodoList;


