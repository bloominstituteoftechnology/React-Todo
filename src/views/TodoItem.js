import React from 'react';

const TodoItem = (props) => {

    console.log(props.data)
    
    return(
        <div>
            <p>{props.data.task}</p>
            
        </div>
    )
}

export default TodoItem;