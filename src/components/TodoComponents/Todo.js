import React from 'react';


const Todo = (props) => {
    
    return (
        <div onClick={()=> {props.handleCompleted(props.task.id)}} 
        style={props.task.completed ? {textDecoration: 'line-through'} : {textDecoration:null}}>
        {props.task.task}
        </div>
    )
};

export default Todo;