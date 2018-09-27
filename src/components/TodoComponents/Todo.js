import React from 'react';


const Todo = (props)=>{
    return (
       <div onClick={(event)=>props.completed(event, props.id)}>
          {props.value}
          
       </div> 
    )
}

export default Todo