import React from 'react';
import './Todo.css'
import ToDo from './Todo';

const TodoList = (props) =>{
    return(
        <div>
            {props.info.map(item => <ToDo key={item.id} value={item.task}   />
            )}
        </div>
    )
}
export default TodoList;