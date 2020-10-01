import React from 'react';
import Todo from './Todo';

const ToDoList = (props) => {

  return( 

    <div>
      <div>
        {props.task.map((task) => (
          <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
        ))}
      </div>
      <div>
        <button onClick={props.clearCompleted}>
          Clear task
        </button>
      </div>
    </div>
    
  )
}

export default ToDoList;