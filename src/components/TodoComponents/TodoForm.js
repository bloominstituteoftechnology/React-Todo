import React from 'react';
const TodoForm = props => {
    return (
<form>
    <input 
        type ="text" 
        placeholder="Todo" 
        name="Todo" 
        className="todoInput"
        onChange= "hello"
        />

    <button>Add todo</button>
    <button>Clear Completed</button>
</form>
    );
};
export default TodoForm