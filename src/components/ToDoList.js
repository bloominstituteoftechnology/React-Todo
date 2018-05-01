// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component }from 'react';

const MyButton = () => {
    return (
        <button>Add Task</button>
    );
}

export const UserInput = (props) => {
    return (
        <input type='text' name='description' placeholder='New Task' value= {props.value} />
    );
}



export default MyButton;
