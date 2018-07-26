import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {props.list.map(element => 
                <Todo key={element.id} item={element.task} completed={false}/>)}
        </div>
    );
}

export default TodoList;
