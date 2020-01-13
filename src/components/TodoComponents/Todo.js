import React from 'react';

const Todo = props => {


    return(
        <div className={props.item.isDone ? 'completed' : 'not-completed'} onClick={() => props.toggleItem(props.item.id)}>{props.item.todoitem}</div>
    );
}

export default Todo;