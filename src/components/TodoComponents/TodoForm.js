import React from 'react';

const TodoForm = props => {
    return (
        <form>
         <input
         onChange={props.handleTodoChange}
         type="text"
         name="todo"
         value={props.value}
         placeholder="...todo"
         />
         <button onClick={props.handleAddTodo}>Add To Do</button>
         <button onClick={props.handleClearTodo}>To Do Completed</button>  
        </form>
    );
};

export default TodoForm;