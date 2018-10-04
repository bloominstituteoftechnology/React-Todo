import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const Todo = props => {
    return(
        <div>
            <TodoList taskData={props.taskData}/>
            <TodoForm changeHandler={props.changeHandler}   inputText={props.inputText}/>
        </div>
    )
}

export default Todo;