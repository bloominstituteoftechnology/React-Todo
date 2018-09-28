import React from 'react';
import './Todo.css'
import ToDo from './Todo';

const TodoList = (props) =>{
    return(
        <div>
            {props.info.map(item => <ToDo key={item.id} id={item.id} value={item.task} completed={item.completed} click={props.click} />
            )}
        </div>
    )
}
export default TodoList;