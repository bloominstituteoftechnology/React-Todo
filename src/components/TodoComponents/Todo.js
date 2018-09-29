
import React from 'react';

const Todo = (props) => {
    
    return(
<div onClick={props.completedHandler} onDoubleClick={props.importantHandler}data-id={props.obj.id}>
    {props.obj.task}
</div>
    )
}

export default Todo