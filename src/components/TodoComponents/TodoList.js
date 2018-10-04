// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = (props) => {
    return (
        <ul className='unordered-list'>            
            {props.data.map((item) =>  (
                <Todo
                    strikeThru = {props.strikeThru}
                    key={item.id}
                    todo={item}                    
                />                    
            ))}
        </ul>
    );
}

export default TodoList;