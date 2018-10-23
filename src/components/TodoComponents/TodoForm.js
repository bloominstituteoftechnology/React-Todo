import React from 'react';

function TodoForm(props) {
    // onSubmit on the form allows us to capture the enter key press and add the Todo item.
    // onClick on the "Add Todo" button also adds a Todo item running the function "addTodo" that was passed down through props.
    return (
        <div>
            <form onSubmit={props.addTodo}>
                <input
                  type="text"
                  name="taskText"
                  value={props.taskText}
                  placeholder="...todo"
                  onChange={props.changeHandler}
                />
                <button onClick={props.addTodo}>Add Todo</button>
                <button onClick={props.clearCompletedTodos}>Clear Completed</button>
            </form> 
        </div>
    );
}

export default TodoForm;