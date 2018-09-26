import React from 'react';

const ToDoList = (props) => {
    return (
        <div>
        {props.list.map(item => {
          return (
            <div key={item.id}>
              {item.task}
            </div>
          );
        })}
      </div>
    )
}

export default ToDoList