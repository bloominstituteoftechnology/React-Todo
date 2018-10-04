// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = (props) => {
    return (
        <ul>            
            {props.data.map((item) =>  (
                <Todo
                    key={item.id}
                    todo={item}
                    strikeThru = {props.strikeThru}
                />                    
            ))}
        </ul>
    );
}

export default TodoList;