import React from 'react';
import Todo from './Todo';


const TodoList = props => {
  return (
    <div>
      <Todo listItem={props.itemProp} />
    </div>
  );
}

export default TodoList;