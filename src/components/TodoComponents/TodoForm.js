import React from 'react';

const TodoForm = props => {
    return (
<div className="todoForm">
<input 
onChange={props.handleChange}
type="text"
name="todo"
value={props.value}
placeholder="...todo" 
 />
<button onClick={props.handleAddTodo}>Add Todo</button>
<button onClick={props.handleDeleteTodo}>Delete Todo</button>
</div>
    );
};


 export default TodoForm;