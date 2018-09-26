// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.listItem.map(item => { 
                return (
                    <Todo id={item.id} task={item.task} />
                )
            })}
        </div>
        )      
}

export default TodoList;