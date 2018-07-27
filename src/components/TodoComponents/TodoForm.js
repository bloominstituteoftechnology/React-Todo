import React from 'react';

export const ToDoInput=props=><input className='input-field' type='text' placeholder=' Enter a Task' value={props.newTask?props.newTask:''} />
export const ToDoButton=()=><div>Add Task</div>
export const ClearCompletedButton=()=><div>Clear Completed</div>



