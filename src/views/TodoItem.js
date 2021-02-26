import React from 'react';

const TodoItem = (props) => {
    
    return(
        <div className="todoItemContainer">
            <p>{props.data.task}</p>
            <input 
                value={props.data.completed} 
                type="checkBox"
                  onChange={() => {
                    props.checkOff(props.data.id)
                }}
                />
        </div>
    )
}

export default TodoItem;