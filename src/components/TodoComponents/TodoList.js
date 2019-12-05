import React from 'react';
// import { withFormik, Form, Field } from "formik";
import Task from './Todo.js';


const TodoList = props => {
  return(
      <div className='todo-list'>
        {/* make sure the whole list is printed to screen */}
        {props.taskList.map(task =>{
          return <Task task={task} key={task.id} finishTask={props.finishTask} />
        })}
      </div>
    );
}



export default TodoList;
