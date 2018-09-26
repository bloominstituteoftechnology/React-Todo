import React from 'react';

const Todo = (props)    =>  {
    return(
        <div className={props.classStyle === true ? "completed" : "incomplete"} onClick={()    =>  props.clickComplete()}>
            {props.item.task}
        </div>
    )
}

export default Todo;
