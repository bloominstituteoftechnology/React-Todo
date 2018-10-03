import React from 'react';

function Todo(props) {
    return(
        <div>
          {props.list.map(name=> {
            return <h2>{name.entry}</h2>
        })}
        </div>
    )
}

export default Todo