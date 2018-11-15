import React from 'react';

//remember to capitalize the var
const Todo = props => {
    return (
        //style goes inside the div tag, not between the tags
        //Referenced line 19 on TodoList (imported into ToDoList which is imported into App)
        <div style={props.todo.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.handleToggleComplete(props.todo.id)}>
            {props.todo.task}
        </div>
    )
}




export default Todo;