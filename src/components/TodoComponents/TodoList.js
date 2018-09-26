import React from 'react';
import ReactDOM from 'react-dom';

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
