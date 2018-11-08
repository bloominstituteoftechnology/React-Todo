import React from 'react';
import Todo from './Todo';
import './Todo.css'

const TodoList = props =>{
    return (
        <div class="list">
            {props.item.map(itemInMap => (
                <Todo key={itemInMap.id}
                itemInTodo={itemInMap}
                addLineThrough={props.addLineThrough}/>

            ))}
        </div>



    )
};

export default TodoList;