import React from 'react';

const ToDo = (props) =>{
    return(
        <div id ={props.id}>
            <p> {props.item.task}</p>   
        </div>
    )
}

export default ToDo;