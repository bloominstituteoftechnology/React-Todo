import React from 'react';


const Todo = (props)=>{
    return (
       <div className='Middle' onClick={(event)=>props.completed(event, props.id)}>
          {props.value}
          
       </div> 
    )
}

export default Todo