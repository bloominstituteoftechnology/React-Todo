import React from 'react';

const Todo = (props) =>{

    const clear = () =>{
        props.finishedHander(props.id)
    }

    return(
        <li onClick={clear}>
           {props.value}
        </li>
    )
}

export default Todo;