import React from 'react';

const style = {
    textDecoration: 'line-through',
    color: 'red'
};

const TodoForm = props => {
    return (
        <div
            className="todoform"
            style={props.toDo.complete ? style : null}
            onClick={() => props.completeToDo(props.toDo)} > {props.toDo.text}
        </div>
    )
};

export default TodoForm;