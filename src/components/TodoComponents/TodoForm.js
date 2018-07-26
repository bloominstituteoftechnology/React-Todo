import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input placeholder="..add new task" onChange={props.handleTask} />
            <button onClick={props.handleAddTodo}>Add Task</button>
            <button onClick={(e) => props.onClickRemove(e)}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;