import React from 'react';
import './Todo.css'

const TodoForm = props => {
    return (
        <form>
            <div className="input-style">
                <input 
                    onChange={props.handleInputChange}
                    type="text"
                    name="todo"
                    value={props.value}
                    placeholder="...todo"
                />
            </div>
            <div className="btn-flex">
            <button onClick={props.handleAddTodo} className={`btn btn-add ${props.className}`}>Add Todo</button>
            <button onClick={props.handleClearCompleted} className={`btn btn-complete`}>Clear Completed</button>
            </div>
        </form>
    )
}

export default TodoForm;