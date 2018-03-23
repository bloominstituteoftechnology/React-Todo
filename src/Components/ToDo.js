import React from 'react';

const Todo = (props) => {
    // console.log("PROPS", props);
    return (
        <div className = 'item' onClick = {this.completeTodo}>
            { props.todo }
        </div>    
    );
}

export default Todo;