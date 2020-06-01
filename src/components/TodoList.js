// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';
import './Todo.css';

const TodoList = props =>{
    
    return(
        <div className = "todolist">
           {console.log(props)}
            <button className="clear-btn" onClick={props.handleSubmit}>
                Complete task
            </button>
        </div>

    );

};

export default TodoList;