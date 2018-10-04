import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
    <div>
        <Todo taskData={props.taskData}  inputText={props.inputText}  descriptionText={props.descriptionText}/>
    </div>
    );
}

export default TodoList;