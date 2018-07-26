import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input placeholder="To Do Task..." onChange={props.handleTask} value={props.value}/>
            <button onClick={props.add}>Add To List</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;