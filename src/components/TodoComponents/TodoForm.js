import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input placeholder="...todo" onChange={props.handlerTodoInput} value={props.value} />
            <button onClick={props.handlerAddTodo} >Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;