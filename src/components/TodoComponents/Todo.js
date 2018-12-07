import React from 'react';

//This is the base. It gets imported up to TodoList
//passes props
//returns a click function that takes in id as param

//remember to capitalize the var
const Todo = props => {
    return (
        //style goes inside the div tag, not between the tags
        //Referenced line 19 on TodoList (imported into ToDoList which is imported into App)
        //onClick function toggles completed on state
        <div style={props.todo.completed ? { textDecoration: 'line-through wavy red' } : null}
        onClick={() => props.handleToggleComplete(props.todo.id)}>
            {props.todo.task}
        </div>
    )
}




export default Todo;