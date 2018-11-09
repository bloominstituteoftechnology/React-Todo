import React from 'react';

const TodoForm = (props) =>{
    return(
        <div>
            <form action="">
                <input 
                type="text" 
                value={props.inputText} 
                placeholder="add new todo"
                onChange={props.handler} 
                name="inputText"/>
                <button onClick = {props.addTodo}>Add todo</button>
                <button onClick ={props.onClear}>Clear Complete</button>
            </form>
        </div>
    );
};

export default TodoForm;