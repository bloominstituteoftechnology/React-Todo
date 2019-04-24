import React from 'react';
import Todo from './Todo';

function TodoList(props){
    return(
        <div className="todo-list-div">
            {props.listItems.map(item => (
                <Todo todoListItems={item} />
            ))}
        </div>
    )
}

export default TodoList;