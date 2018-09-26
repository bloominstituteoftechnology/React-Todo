import React from 'react';
// Form fields needed to add new items to the list.

const TodoForm = (props) => {
    console.log('todoform', props);
    //props.newEntry: event handler
    //props.clickEntry: event handler to add to todo list
    return (
        <div>
            <input type="text" placeholder="...todo" onKeyUp={props.newEntry} />
            <input type="button" onClick={props.clickEntry} value="Add ToDo" />
            <input type="button" value="Clear Completed" />
        </div>
    );
}

export default TodoForm;
