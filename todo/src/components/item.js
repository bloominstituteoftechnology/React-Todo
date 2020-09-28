import React from 'react';
import '../App.css'
const Item = props => {
  return (
    <div
      className={`item${props.item.complete ? ' complete' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.task}</p>

    </div>
  );
};

export default Item;
