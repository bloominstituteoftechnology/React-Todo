import React from 'react';


const Todo = (props) => {
    return(
        <div key={item.id}>
        <input
          id={item.id}
          type="checkbox"
          onChange={item => this.handleCheck(item)}
        />
        {item.id}: {item.text} @{new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(item.date)}
        </div>
    )
}

export default Todo;