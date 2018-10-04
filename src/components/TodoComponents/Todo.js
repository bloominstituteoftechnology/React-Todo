import React from 'react';


const Todo  = props => {
    return (
        <div>
        <h4 id={props.id}>{props.task}</h4>
        </div>
    )
 }





export default Todo;