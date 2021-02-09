import React from 'react';
import Todo from './Todo'

const ToDoList = (props) => {

    return (
        <div className='todo-list'>
            {props.toDos.map((item) => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
        </div>
    )
}

export default ToDoList