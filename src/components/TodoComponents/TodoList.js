import React from 'react';

import TodoNote from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.toDoDataList.map((toDo, index) => {
        return <TodoNote toDo={toDo} key={index} id={Date.now()} />;
      })}
    </div>
  );
}

export default TodoList;