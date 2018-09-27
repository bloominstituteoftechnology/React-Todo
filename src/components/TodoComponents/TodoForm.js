import React from 'react';
// Form fields needed to add new items to the list.

const TodoForm = (props) => {
    console.log('todoform', props);
    //props.newEntry: event handler
    //props.clickEntry: event handler to add to todo list
    //props.clickClear: event handler to remove completed items from list
    return (
        <div>
            <input type="text" placeholder="...todo" onKeyUp={props.newEntry} />
            <button onClick={props.clickEntry}>Add ToDo</button>
            <button onClick={props.clickClear}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;
