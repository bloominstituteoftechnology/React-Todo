import React from 'react';
import './Todo.css';


const Todo = (props) => {
    return(
        <div key={props.nitem.id} className={props.nitem.style}>
        <input
          id={props.nitem.id}
          type="checkbox"
          onChange={props.change}
          
        />
        {props.nitem.id + 1}: {props.nitem.text} @{new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(props.nitem.date)}
        </div>
    )
}

export default Todo;