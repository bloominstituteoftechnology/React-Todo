import React from 'react';

const Todo = props => {
    return(
      <div className ={`${props.task.completed ? 'completed' : ''}`} 
            onClick={() => props.toggleTask(props.task.id)} >
          <li>{props.task.task}</li>
      </div>
    );
};

export default Todo