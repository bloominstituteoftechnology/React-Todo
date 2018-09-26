import React from 'react';
import './Todo.css'
import ToDo from './Todo';

const TodoList = (props) =>{
    return(
        <div>
            {props.info.map(item => <ToDo obj={item} />
            )}
        </div>
    )
}
export default TodoList;