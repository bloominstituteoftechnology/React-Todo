import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input className="todoInput" onChange={props.onInputChange} type="text" name="todo" placeholder="...todo" autoComplete="off" />
            <br />
            <input onClick={props.onSubmit} className="btn" type="submit" value="Add Todo" />
            <button onClick={props.onClear} className="btn" >Clear Completed</button>
        </form>
    );
};

export default TodoForm;