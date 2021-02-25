import React from 'react'; 

const Todo = (props) => {
    return(
        <div className="todo_item" onClick={() => {
            props.getId(props.data.id)
        }}>
            <p>{props.data.task}</p>
            <input className="todoCheckBox" onClick={props.checked} type="checkbox" />
        </div>
    )
}

export default Todo; 