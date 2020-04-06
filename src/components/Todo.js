import React from 'react';

const Item = props => {
  const  getStyle = () => {
        return {
          textDecoration: props.task.completed ? 'line-through' : 'none'
        }
      };
  return (
    <div
      style = {getStyle()}  
      onClick={() => props.toggleItem(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Item;