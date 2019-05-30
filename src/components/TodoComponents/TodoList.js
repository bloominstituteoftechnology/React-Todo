
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props);
    return (
        <div className="todo-list">
          {props.taskList.map(taskFromMap => (
        <Todo todoOnProps={taskFromMap} key={taskFromMap.idNumber} toggleItem={props.toggleItem}/>
          ))}
        </div>
            
    );
};

export default TodoList;