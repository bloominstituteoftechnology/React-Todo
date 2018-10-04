import React from 'react';

const TodoForm = props => {
    return(
        <div className="todoForm">
            <form className="form" onSubmit={props.addNewTodo}>
                <input type="text" name="todo" placeholder="...todo" value={props.todo} onChange={props.changeHandler} />
                <input value="Add Todo" type="submit" onClick={props.addNewTodo} /> 
            </form>
            <button onClick={props.filterTasks} className="clearButton">Clear Completed</button>
        </div>
    )
}

export default TodoForm;