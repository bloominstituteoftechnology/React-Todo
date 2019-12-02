import React from 'react';



const Todo = props => {

    return(
    <div className="todos" key ={props.id}>
        <h1>{props.task}</h1>
    </div>)
    
}
export default Todo;