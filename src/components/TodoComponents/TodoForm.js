import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type='text' placeholder='Todo'></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;

//<button className={}>{props.text}</button>