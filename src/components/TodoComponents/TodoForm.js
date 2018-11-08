// will do what character form does.
import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTodo} className="todo-list">
                <input 
                    type="text"
                    name="inputText"
                    placeholder="add to todo list"
                    value={props.inputText}
                    onChange={props.handleChange}
                    />
                <button type="submit">Add Todo Item</button>
            </form>
            <button onClick={props.clearTodo}>Clear Complete</button>
        </div>
    )
}

export default TodoForm;