// `<TodoForm>` will hold your input field and your `Add Todo` and 
// `Clear Completed` buttons.
import React from 'react';

function TodoForm(props) {
    return (
        <div>
            <input
             type="text"
             onChange={props.changeHandler}
             value={props.newTodo}
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearItems}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;