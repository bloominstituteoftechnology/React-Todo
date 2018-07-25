import React from 'react';
import './Todo.css' 

const Todo = props => {
  const { currentList } = props;

  return (
    <div className="todo">
      <h2>Todo List: </h2>
      {currentList.map(todo => {
        const {task, id} = todo;
        const classes = `id-${id}`;

        return (
          <div className={classes}>
            <p 
              onClick={props.triggerCompleted} 
              className="todo-item"
            >
              {task}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;