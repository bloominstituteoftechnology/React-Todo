import React from 'react';

const TodoItem = (props) => {

    console.log(props.data)

    return(
        <div className="todoItemContainer">
            <p>{props.data.task}</p>
            <input value={props.data.completed} type="checkBox" />
        </div>
    )
}

export default TodoItem;