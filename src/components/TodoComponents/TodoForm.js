import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addTodo}>
                 <input 
                 type="text" 
                 placeholder="Enter Task Here" 
                 value={props.newTodo}
                 onChange={props.changeHandler}
                 name="newTodo"
                 />
                 <button type="submit" onClick={props.addTodo}>Add Todo</button>
                 <button>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;