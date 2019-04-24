import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={this.addTodo}>
            <input 
                type = 'text'
                name = 'todo'
                value = {props.newTodo.task}
                placeholder = 'todo'
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;