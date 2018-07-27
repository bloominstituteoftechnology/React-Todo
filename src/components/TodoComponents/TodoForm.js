import React from 'react';

export const ToDoInput=props=><input type='text' placeholder=' Enter a Task' value={props.newTask?props.newTask:''} onKeyPress={props.onKeyPress?props.onKeyPress:null} onChange={props.onChange?props.onChange:null} />
export const ToDoButton=props=><div className="waves-effect waves-light btn ccbtn" onClick={props.onClick?props.onClick:null}>Add Task</div>
export const ClearCompletedButton=props=><div className="waves-effect waves-light btn ccbtn" onClick={props.onClick?props.onClick:null}>Clear Completed</div>



