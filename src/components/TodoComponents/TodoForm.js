import React from 'react';


const TodoForm = (props) => {
    return (
        <div className='form-div'>            
            <form onSubmit = {props.AddTodoHandler}>
                <input className='input' onChange={props.handleTodoChange}
                    type="text"
                    name="todo"
                    value={props.value}
                    placeholder="...todo"/>
            </form>    
                <button className='button add-button' onClick={props.AddTodoHandler}>Add Todo</button>
                <button className='button remove-button' onClick={props.removeCompleted} >Clear Completed</button>              
        </div>
    );
}

export default TodoForm;

