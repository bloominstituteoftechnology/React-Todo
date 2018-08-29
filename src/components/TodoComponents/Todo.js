import React from 'react';

const Todo = (props) => {
    return <li id = {props.id} onClick = { props.onItemClick } >{ props.item.task }</li>;
}

export default Todo;
