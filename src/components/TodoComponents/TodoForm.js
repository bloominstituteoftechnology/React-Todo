import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <form onSubmit={props.addNewTodo}>
                <input type="text" name="todo" placeholder="...todo" value={props.todo} onChange={props.changeHandler} />
                <input value="Add Todo" type="submit" onClick={props.addNewTodo} />
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;