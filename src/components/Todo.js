import React from 'react'

const Todo = (props) => {
    const handleClick = () => {
        props.completedTask(props.tasks.id)
    }

    return (
        <div
          onClick={handleClick}
          
        >
          <p>{props.tasks.name}</p>
        </div>
      );
    };


export default Todo