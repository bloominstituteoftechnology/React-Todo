import React, { useState } from 'react';
import "./TodoForm.css";

function TodoForm (props) {
    const [state, setState] = useState({
        todo: ""
    })

    const changeHandler = e => {
        setState({
            ...state, todo: e.target.value
        })
    }

    const submitTodo = e => {
        e.preventDefault();
        props.addTodo(state.todo)
        setState({todo: ""})
    }
        return (
            <div className="formdiv">
                <form onSubmit={submitTodo} className="form">
                     <input name="todo" value={state.todo} onChange={changeHandler} />
                    <button>Add Todo</button>
                </form>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        )
}
export default TodoForm