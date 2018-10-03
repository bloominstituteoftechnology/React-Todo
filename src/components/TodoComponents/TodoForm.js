import React from 'react';
import './Todo.css'

const TodoForm = props => {
    return (
    <div>
        <form className="list_form">
            <input onChange={props.inputHandler} className="form-input" placeholder="What is your goal?"/>
            <div className="actionbuttons">
                <button className="addtodo button">Add Todo</button>
                <button className="clear button">Clear list</button>
            </div>
        </form>
    </div>
    )
}   

export default TodoForm;