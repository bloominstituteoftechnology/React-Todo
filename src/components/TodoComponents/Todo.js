import React from 'react';

const Todo = props => {
    return (
      <div onClick={() => props.completedToggle(props.id)} className={props.completed ? 'todo-completed' : null }>
        {props.taskItem}
      </div>
    );
};

export default Todo;