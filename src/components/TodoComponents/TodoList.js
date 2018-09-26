import React from 'react';

import Todo from './Todo.js'

const TodoList = (props) => {
  return (
    <div>
      {this.props.data.map(todo => {
        return <Todo id={todo.id} />
      })}
    </div>
  );
}

export default TodoList;
