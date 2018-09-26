import React from 'react';

const ToDo = (props)=>{
    return(
        <div key={props.obj.id}> {props.obj.task} </div>
    )
}
export default ToDo;