import React from 'react'

export default function Item(props) {
  const handleClick = () => {
    props.toggleCompleted(props.item.id);
  }
  return (
    <div className={`item${props.item.completed ? ' completed' : ''}`} onClick={handleClick}>
      <p>{props.item.task}</p>
    </div>
  )
}
