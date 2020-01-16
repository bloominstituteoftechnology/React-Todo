import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
const TodoList = props => {
  return (
    <div className="todo__list">
        {props.toDo.map((task) => {
            <Todo
              key={task.id}
              task={task.task}
              id={task.id}
            />
        })};
    </div>
  );
  // return (
  //   <div className="todo-list">
  //     {props.toDo.map(task => (
  //       <Todo
  //         key={task.id}
  //         task={task}
  //         id={task.id}
  //         toggleCompleted={props.toggleCompleted}
  //       />
  //     ))}
  //   </div>
  // );
};
  export default TodoList;