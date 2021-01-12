import React from 'react'

export default function Item(props) {
  const handleClick = () => {
    props.toggleCompleted(props.item.id);
  }

  const handleDeleteClick = (e) => {
    console.log(e.target);
   props.deleteItem(props.item.id)
  }
  
  return (
    <div className={`item${props.item.completed ? ' completed' : ''}`} onClick={handleClick}>
      <p>{props.item.task}</p>
      <button className='deleteItem invisible' onClick={handleDeleteClick}>x</button>
    </div>
  )
}
