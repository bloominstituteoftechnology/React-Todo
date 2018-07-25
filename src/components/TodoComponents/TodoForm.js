import React from 'react';

const ToDoInput=()=><input className='input-field' type='text' placeholder='Enter a Todo'/>
const ToDoButton=()=><div className='todo-button'>Add Todo</div>
const ClearCompletedButton=()=><div className='clearcompleted-button'>Clear Completed</div>

const ToDoForm=()=><div><ToDoInput /><ToDoButton /><ClearCompletedButton /></div>

export default ToDoForm;