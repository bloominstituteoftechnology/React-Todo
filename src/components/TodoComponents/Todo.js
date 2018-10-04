import React from 'react';

const Todo = props => {
    console.log(props);
    return (
        <form onSubmit={props.addToList}>
            <input 
                type="text"
                placeholder="what to do?"
                onChange={props.changeHandler}
                value={props.todoItem} 
            />
        </form>
    )
}

export default Todo;