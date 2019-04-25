import React from 'react';
import Todo from './Todo';

function TodoList(props){
    return(
        <div className="todo-list-div">
            {props.todoListItems.map(item => (
                <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} />
            ))}
        </div>
    )
}

export default TodoList;