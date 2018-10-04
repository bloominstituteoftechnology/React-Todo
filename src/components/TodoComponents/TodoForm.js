import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input 
                type="text"
                name="todo"
                placeholder="...todo"
                onChange={props.addTodo}  //addTodo? ooorr?
            
            />
            <button onClick={props.addTodo}>Add Todo</button>  {/*caps? no this? addTodo? not TodoForm from render.*/}
            <button onClick={props.addTodo}>Clear Completed</button>
        </form> 
    );
};

export default TodoForm;