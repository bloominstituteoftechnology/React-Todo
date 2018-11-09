import React from 'react';

const Todo = props =>{
    return(
        <div>
            <p onClick ={()=>{console.log(props)}}>{ props.todo.task }</p>

        </div>
    );
};

export default Todo;