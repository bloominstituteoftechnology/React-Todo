import React from 'react';

function TodoListForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" 
                value={props.taskItem}
                placeholder="...todo"
                onChange={props.onChange}
                name="taskItem"
                />
            <button>Add Todo</button>
            <button type="button">Clear Completed</button>
        </form>
    );
};

export default TodoListForm;