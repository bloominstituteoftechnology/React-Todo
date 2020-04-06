import React from 'react';
import Todo from './Todo';

 export default function TodoList(props) {
    return (
        <div>
            {props.toDoData.map( item => (
                <Todo 
                key={item.id} task={item.task} item={item} toggleItem={props.toggleItem} 
                />
            ))}
        </div>
    )

}
