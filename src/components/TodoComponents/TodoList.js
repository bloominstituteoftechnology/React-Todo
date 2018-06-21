// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';



const TodoList= props => {
   console.log(props);
    return (
        <ul>
            {props.items.map(item => { 
            return <li key={Date.now()}>{item.task}</li>;
            })}
        </ul>
        
    );
};

export default TodoList;