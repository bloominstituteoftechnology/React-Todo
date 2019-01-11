// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className='todoContainer'>
            {
            props.data.map((e) => {
                return(
                    <Todo itemClicked={props.itemClicked} id={e.id} completed={e.completed} task={e.task}/>
                )
            })
        }
        </div>
    )
}

export default TodoList