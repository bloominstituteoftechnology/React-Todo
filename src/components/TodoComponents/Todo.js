import React from 'react';


const Todo = (props) => {
    return(
        <div key={props.nitem.id}>
        <input
          id={props.nitem.id}
          type="checkbox"
          
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