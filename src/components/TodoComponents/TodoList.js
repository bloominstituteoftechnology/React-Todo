import React from 'react';
import './Todo.css';



const TodoList = props => {
  return(
    <div className={props.data.hide} style={props.data.completed ? {textDecoration: 'line-through'} : null}>
     
      <div onClick={() => props.strikeThrough(props.data.id)} onClick={()=> props.handleCompleted(props.data.completed, props.data.id)}>
        {props.data.task}</div>
    
    </div> 
   );
};

export default TodoList;
