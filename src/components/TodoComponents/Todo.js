import React from 'react';



const Todo = props => {
    
    return(
        <div>
            {props.todoProp.task}
        </div>
    );   
};


export default Todo;