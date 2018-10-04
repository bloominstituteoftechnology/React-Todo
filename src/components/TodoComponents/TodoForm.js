// `<TodoForm>` will hold your input field and your `Add Todo` and 
// `Clear Completed` buttons.
import React from 'react';
import './Todo.css'

function TodoForm(props) {
    return (
        <div className="todoForm">
            <input
             className="input"
             type="text"
             onChange={props.changeHandler}
             value={props.newTodo}
             placeholder="Add a new todo here"
            />
            <button className="todoButton add" onClick={props.addTodo}>Add Todo</button>
            <button className="todoButton clear" onClick={props.clearItems}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;