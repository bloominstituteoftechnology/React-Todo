import React from 'react';

import './Todo.css';

const TodoForm = (props) =>{
   
    return (<div className='todoinput'><input id='todoInput'  onKeyPress={props.methods[1]} type='text'></input><button onClick={props.methods[0]}>Add Todo</button><button>Clear Completed</button> </div>)
}


export default TodoForm;