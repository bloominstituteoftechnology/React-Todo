import React from 'react';

import './Todo.css';

const TodoForm = (props) =>{
   
    return (<div className='todoinput'><input id='todoInput'  onKeyUp={props.methods[1]} type='text'></input><div className="inputButton"><button onClick={props.methods[0]}>Add Todo</button></div><br /><div className="inputButton"><button onClick={props.methods[2]}>Clear Completed</button> </div></div>)
}


export default TodoForm;