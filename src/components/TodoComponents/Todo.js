import React from 'react';


const Task = props => {
    return(
        <div>
            {props.toDolists.map(item =>{
            return  <h1> {item.task}</h1>;
            })}
        </div>
    );
};

export default Task;