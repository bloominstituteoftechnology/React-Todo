import React from 'react';
import './Todo.css' 

const Todo = props => {
  const { currentList } = props;

  return (
    <div>
      {currentList.map(todo => {
        const {task, id} = todo;
        const classes = `${id}`;

        return (
          <div className={classes} onClick={props.triggerCompleted}>
            <p>{task}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;