import React from 'react';
import './Todo.css'

const TodoForm = props => {
    return (
    <div>
        <form className="list_form">
            <input type="text" name="temp" onChange={props.inputHandler} className="form-input" placeholder="What is your goal?" value={props.temp}/>
            <div className="actionbuttons">
                <button onClick={props.clickHandler} className="addtodo button">Add Todo</button>
                <button onClick={props.clearHandler} className="clear button">Clear Done</button>
            </div>
        </form>
    </div>
    )
}   

export default TodoForm;