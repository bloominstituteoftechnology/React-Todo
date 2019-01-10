import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todoList.map(item => {
                return <Todo todoItem={item} key={item.id} toggleCompleted={props.toggleCompleted}/>
            })}
        </div>
    )
}

export default TodoList