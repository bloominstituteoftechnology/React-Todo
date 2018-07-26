import React from 'react';
import "./Todo.css";

const TodoForm = (props) => {
    return (
        <div>

            <input required={true} className="form__input" onKeyPress={ props.onKeyPress }
            onChange={ props.onChange } type="text"  value={ props.value }/>

            <button className="form__button" onClick={ props.onClick }>Add Todo</button>
            <button className="form__button" onClick={ props.onClear }>Clear Completed</button>

        </div>
    );
}

export default TodoForm;

// onKeyPress={ props.onKeyPress }

