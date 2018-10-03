// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import TodoForm from './TodoForm';



const TodoList = (props) => {
    return (
        <div>            
            {props.data.map((item) => {
                return (
                    <p key={props.keys}>{item.task}</p>
                );
            })}

            <TodoForm />
            
        </div>
    );
}

export default TodoList;