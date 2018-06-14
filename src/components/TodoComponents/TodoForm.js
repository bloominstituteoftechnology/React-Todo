import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form>
                <input
                type="text"
                name = 'todo'
                placeholder = "ADD Todo"
                onChange = {props.updateItemTodo}
                value = {props.value}
                />
                <button onClick ={props.handleAddItemTodo}>ADD TODO</button>
                <button onclick ={props.handleClearTodo}>Clear</button>
            </form>
        </div>
    );
};

export default TodoForm;