// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
  return (
    <div>
      {props.data.toDoData.map(x => {
        return <div key={x.id}>{x.task}</div>;
      })}
    </div>
  );
};

export default TodoList;
