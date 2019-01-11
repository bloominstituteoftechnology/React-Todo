<<<<<<< HEAD
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(taskInMap => (
        <Todo
          key={taskInMap.id}
          taskOnProps={taskInMap}
          lineThrough={props.lineThrough}
        />
      ))}
    </div>
  );
};

export default TodoList;
=======
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
>>>>>>> 466f99b10404af68e500587d92f0bf0e03f39a25
