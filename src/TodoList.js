import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.listArray.map(item=>{
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default TodoList;
