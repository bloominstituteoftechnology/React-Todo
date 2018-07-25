import React from 'react';

import './Todo.css';

const TodoForm = (props) =>{
   
    return (<div className='todoinput'><input id='todoInput' type='text'></input><button onClick={props.methods}>Add Todo</button><button>Clear Completed</button> </div>)
}


export default TodoForm;