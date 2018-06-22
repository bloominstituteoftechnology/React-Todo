import React from 'react';
import Todo from './Todo';

const TodoForm = props => {
    return (
        <form>
         <input
         onChange={props.changeTodo}
         type="text"
         name="todo"
         value={props.value}
         placeholder="...todo"
         />
         <button onClick={props.addTodo}>Add To Do</button>
         <button onClick={props.clearTodo}>To Do Completed</button>  
        </form>
    );
};

export default TodoForm;