import React from 'react';

function Todo(props) {

    return (
        <div className="todoTask">
            <ul><li>{props.todoProp.task}</li></ul>
        </div>
    )
}

export default Todo;