import React from 'react';
import './Todo.css';


const TodoForm = props => { //hold input field and buttons
    console.log(props);
    return (
<div>
       <input type='text'
       placeholder='Add Todo'
       onChange={props.toDoHandler}
       value={props.dataInput}/>
       <button onClick={props.addTodo}>Add todo</button>
       <button onClick={props.clearTodo}> Clear completed </button>
    </div>
    )
}

export default TodoForm;