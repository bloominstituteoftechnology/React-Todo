import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
      <div>
        {props.array.map(i => <Todo task={i.task} />)}
      </div>
    );
}

export default TodoList;