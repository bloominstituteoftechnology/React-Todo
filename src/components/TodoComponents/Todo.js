import React from 'react';
import './Todo.css';


const Todo = (props) => {
    return(
        <div key={props.nitem.id} className={props.nitem.style}>
        <div className='checkbox'>
        <input
          id={props.nitem.id}
          type="checkbox"
          onChange={props.change}
          
        />
        </div>
        <div className='listItem'>{props.nitem.text}</div><div className='itmdate' >{new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(props.nitem.date)}
        </div>
        </div>
    )
}

export default Todo;