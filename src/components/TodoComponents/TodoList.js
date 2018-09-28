import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className='todo-container'>
      <p className='header'>
        <span className='date-header'>Date Entered</span><span className='task-header'>Task Name</span>
      </p>
    <ul className='todo-list'>
      {props.list.map(item => (
        <Todo key={item.id} tag={item.id} complete={item.complete} task={item.task} completeHandler={props.completeHandler}/>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
