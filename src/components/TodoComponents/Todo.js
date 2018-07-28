import React from 'react';


const Todo=props=>
<div className="card">
<div className="card-content">
<p 
className={"flow-text "+(props.taskProp.completed===true?"completed":null)} 
onClick={()=>props.updateTaskStatus(props.taskProp.id)}>
{props.taskProp.task}
</p>
</div>
</div>

export default Todo;