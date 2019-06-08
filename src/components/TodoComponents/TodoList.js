// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) =>{
    return(
        <div className="todoListContainer">
        <div className="header">
          <h1>To Do:</h1>
        </div>
            <div className="todoList">
            {props.tasks.map((task) => {
                return <Todo key = {task.id} tasks = {task} onToggle = {props.onToggle} />
            })}
            </div>
            <div className="submitButton">
            <button onClick = {props.deleteTask}>Clear</button>
            </div>
        </div>
    )
};

export default TodoList