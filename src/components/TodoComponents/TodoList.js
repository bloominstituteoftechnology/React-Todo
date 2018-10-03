// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';




const TodoList = (props) => {
    return (
        <div>            
            {props.data.map((item) => {
                return (
                    <p key={item.id}>{item.task}</p>
                );
            })}
        </div>
    );
}

export default TodoList;