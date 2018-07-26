import React from 'react';

const Todo = props => {
    return (
      <div onClick={props.completed ? 'todo-completed' : null }>
      {console.log(props.completed)}
        {props.taskItem}
      </div>
    );
};

export default Todo;