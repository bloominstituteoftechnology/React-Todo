import React from 'react';

const ToDo = (props)=>{
    return(
        <div className={props.completed?'completed':null} onClick={()=>props.click(props.id)} > {props.value} </div>
    )
}
export default ToDo;