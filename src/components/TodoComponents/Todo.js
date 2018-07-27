import React from 'react';


const Todo=props=><div className="card"><div className="card-content"><p id={props.taskProp.id} className={"flow-text "+(props.taskProp.completed===true?"completed":null)}>{props.taskProp.task}</p></div></div>

export default Todo;