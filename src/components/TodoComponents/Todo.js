import React from 'react';

function Todo(props) {
    return(
       <li style={props.completed ? { textDecoration: 'line-through' } : null} onClick={() => props.finishItems(props.id)} >{props.item.task}</li> 
    );
};

export default Todo;