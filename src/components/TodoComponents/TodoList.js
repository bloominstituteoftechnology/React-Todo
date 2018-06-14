import React from "react";
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo todo={todo}
                     key={Math.random()}
                     toggleCompleted={props.toggleCompleted} />;
      })}
    </div>
  );
};

export default TodoList;
