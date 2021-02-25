import React from 'react'; 

const Todo = (props) => {
    return(
        <div className="todo_item">
            {props.children}
        </div>
    )
}

export default Todo; 