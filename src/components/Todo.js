import React from 'react'

const Item  = (props) =>{

    const handleClick = () => {
      props.onComplete(props.item.id)
    }

    let done = 'item';
    if (props.item.completed === true){
       done = done + 'Completed';
    }
 
  return(
    <div className = 'item'>
        <h3 className={done} onClick={handleClick}>
          {props.item.task}
        </h3>
    </div>
  )

}
export default Item