import React from 'react';

const TodoForm = props => {
    return (
        <div className="todoForm">
            <form onSubmit={props.addTodo}>
                <input type="text" name="inputText" value ={props.inputText} onChange={props.handleChange} placeholder="add new Todo" />
                {/* <input type="text" name="inputTextTwo" value ={props.inputTextTwo} onChange={props.handleChange} /> */}
                <button onClick={props.addTodo}>Add ToDo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;