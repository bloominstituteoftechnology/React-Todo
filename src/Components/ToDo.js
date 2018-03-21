import React from 'react';

const ToDo = (props) => {
    return (
        <ul> {props.todo.map((todo, i) => {
            return <li key = {i}>{ todo }</li>
        })} </ul> 
    );
}

export default ToDo;