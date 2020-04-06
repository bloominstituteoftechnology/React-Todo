import React from 'react';

export default function (props) {
  return (
    <>
      <div
        className={`item${props.item.complete ? ' complete' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
      >
        <p className='task-item'>{props.item.task}</p>
      </div>
    </>
  );
}
