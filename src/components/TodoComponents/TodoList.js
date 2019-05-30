
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-list">
          {props.taskList.map(taskFromMap => (
        <Todo todoOnProps={taskFromMap} key={taskFromMap.idNumber}/>
          ))}
        </div>
            
    );
};

export default TodoList;