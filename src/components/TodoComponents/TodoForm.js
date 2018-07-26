import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input className="todo-input todo-search" onChange={props.onSearch} type="search" name="todo-search" placeholder="Search..." autoComplete="off" />
            <input className="todo-input" onChange={props.onInputChange} type="text" name="todo" placeholder="Add..." autoComplete="off" />
            <br />
            <button onClick={props.onSubmit} className="btn">Add Todo</button>
            <button onClick={props.onClear} className="btn" >Clear Completed</button>
            <button onClick={props.onClearAll} className="btn" >Clear All</button>
        </form>
    );
};

export default TodoForm;