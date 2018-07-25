import React from 'react';

const ToDoInput=()=><input class='input-field' type='text' placeholder='Enter a Todo'/>
const ToDoButton=()=><div class='todo-button'>Add Todo</div>
const ClearCompletedButton=()=><div class='clearcompleted-button'>Clear Completed</div>

const ToDoForm=()=><div><ToDoInput /><ToDoButton /><ClearCompletedButton /></div>

export default ToDoForm;