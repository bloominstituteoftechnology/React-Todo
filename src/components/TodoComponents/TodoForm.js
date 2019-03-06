import React from 'react';


const TodoForm = props => (

    <form>
        <input type ="text" onChange = {props.newTask} value = {props.task}/>
        <button onClick = {props.addTodo}> Add Todo </button>
        <button> Clear Completed </button>
    </form>
)

export default TodoForm;