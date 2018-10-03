import React from 'react';


const Task = props => {
    return(
        <div>
            <h1>To Do List</h1>
            {props.toDolists.map(item =>{
            return  <h1 onClick = {props.taskcompleted}> {item.task} {item.completed}</h1>;
            })}
        </div>
    );
};

export default Task;