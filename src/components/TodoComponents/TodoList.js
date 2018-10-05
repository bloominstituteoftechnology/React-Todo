// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


const Task = props => {
  return (
        <div>
            <h1>My To-do List:</h1>
            {props.toDolists.map((item, index)=> {
                return <h2 
                key ={index}
                onClick ={ () => {props.taskCompleted(index)}}
                className={item.completed ? 'complete' : 'incomplete'}
            >{item.task} </h2>
            })}
        </div>
    );
};

export default Task;