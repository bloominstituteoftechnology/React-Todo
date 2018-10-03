import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type="text" placeholder="...todo" onChange={props.changeHandler} value={props.inputText} />
            <button type="submit">Add to list</button>
            <button>Clear list</button>
        </form>
    );
}

export default TodoForm;