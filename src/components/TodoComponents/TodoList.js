// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
    
    let list = props.tasks;
    return (
        <div>{list.map((item)=>{
            return <Todo task={item}/>
        })}</div>
    );
}

export default TodoList;