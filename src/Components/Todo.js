import React from 'react';
 
function Todo(props) {
    const strikeHandler = () => {
        props.toggleCompleted(props.index)
    }

    const strikeThrough = {textDecoration: props.todo.clicked ? 'line-through' : 'none'}

    return (
        <div style={strikeThrough} className="todo">
            <input type="checkbox" value={props.clicked} onClick={strikeHandler} />
            {props.todo.body}
        </div>

    );
}

export default Todo