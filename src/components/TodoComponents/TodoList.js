// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';


const TodoList = (props) =>{
    return(
        <div className = "to-do-list">
            {props.list.map(taskItem => {
                return(
                    <ToDo handleClick = {props.handleClick} item = {taskItem} key ={taskItem.id}/>
                ) 
            })}
        </div>
    )
}

export default TodoList;