import React from 'react';


const TodoForm = (props) => {
    return (
        <div>            
            <form onSubmit = {props.AddTodoHandler}>
                <input onChange={props.handleTodoChange}
                    type="text"
                    name="todo"
                    value={props.value}
                    placeholder="...todo"/>
            </form>    
                <button onClick={props.AddTodoHandler}>Add Todo</button>
                <button onClick={props.removeCompleted} >Clear Completed</button>              
        </div>
    );
}

export default TodoForm;

