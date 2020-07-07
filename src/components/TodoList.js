import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
    <div className="TodoList">
      {props.list.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearDone}>Clear</button>
    </div>
  );
};

export default TodoList;
