import React from 'react';

const TodoList = props => {
    return(
        <div>
        {props.todoData.map((item, index) => {
    return(
        <p
        onClick={() => props.strikeThrough(index)}
        className={item.textDecoration}
        >
    {item.task}
    </p>
    );
    })}
        </div>
    )
}


export default TodoList;