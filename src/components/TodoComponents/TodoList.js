import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props.todoData)
    return (
        <div>
            {props.todoData.map(item => (
                <Todo key={item.id} task={item.task} />
            ))}   
        </div>
    )
}


export default TodoList
