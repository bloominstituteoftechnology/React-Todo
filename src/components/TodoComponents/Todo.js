import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const Todo = props => {
    return(
        <div>
            <TodoList taskData={props.taskData} inputText={props.inputText} taskComplete = {props.taskCompleted}/>
            <TodoForm changeHandler={props.changeHandler}  inputText={props.inputText} addTask={props.addTask}/>
        </div>
    )
}

export default Todo;