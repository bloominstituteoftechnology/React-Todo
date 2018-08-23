import React from 'react';
import Todo from './Todo';





const TodoList = (props) => {
    return (
        <div>
            {props.taskList.map((eachTask, i, each) => {
               return <Todo key={i} todo={eachTask.task} todo={each}/> ;
            })} 
        </div> 
    );
};

export default TodoList;


