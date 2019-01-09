import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todoList.map(item => {
                return <Todo todoItem={item}/>
            })}
        </div>
    )
}

export default TodoList