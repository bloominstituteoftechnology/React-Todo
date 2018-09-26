import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.listArr.map((item) => <Todo key={item.id} task={item.task}/>)}
        </div>
    )
}

export default TodoList