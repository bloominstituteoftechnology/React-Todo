import React from 'react';

const TodoList = props => {
    return(
        <div>
        {props.todoData.map((item, index) => {
    return(
        <p
        key={item.id}
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