import React from 'react'

const  Todo = props => {
    return(
    <div className="task-div">
      <div 
      onClick={() => props.toggleList(props.todo.id)}
      className={`todo${props.todo.completed ? " completed " : ""}`}>
      
        <p className="task-name"> {props.todo.task} </p>
      
      </div>
   </div>
    )
}

export default Todo;