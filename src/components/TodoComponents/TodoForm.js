import React from 'react';

const TodoForm = props=> {
    return (
        <form>
            <input type = "text" name = "todo" value = {props.value}/>
        </form>
        )
}

export default TodoForm