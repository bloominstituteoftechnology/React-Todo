import React from "react";
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='whattodo-list'>
            {props.WhatToDo.map(item => (
                <Todo kea={item.id}
                item={item}
                toggleItem={props.toggleItem}/>
            ))}
            <button className='clear-button' onClick={props.clearDone}>
                Clear 
            </button>
        </div>
    );
};
export default TodoList;