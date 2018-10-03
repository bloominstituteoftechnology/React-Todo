import React, { Component } from 'react';


const TodoForm = (props) => {
    return (
        <div>            
            <input onChange={props.handleTodoChange}
                type="text"
                name="todo"
                placeholder="...todo"/>
      <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.changeColor}>Clear Completed</button>    
        </div>
    );
}

export default TodoForm;

