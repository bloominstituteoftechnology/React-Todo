import React from 'react';

const Todo = props => {
    console.log(props);
    return (
        <input 
            type="text"
            placeholder="what to do?"
            onChange={props.changeHandler}
            value={props.todoItem} 
        />
    )
}

export default Todo;